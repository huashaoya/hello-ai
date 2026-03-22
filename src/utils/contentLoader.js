import { marked } from 'marked';

// Glob all markdown files
const markdownFiles = import.meta.glob('../content/*.md', {
  query: '?raw',
  import: 'default',
  eager: true
});

// Cache for parsed content
const contentCache = {};

// Configure marked
marked.setOptions({
  breaks: true,
  gfm: true
});

export function getTopicContent(topicId, lang) {
  const cacheKey = `${topicId}_${lang}`;

  if (contentCache[cacheKey]) {
    return contentCache[cacheKey];
  }

  const filePath = `../content/${topicId}.${lang}.md`;

  if (!markdownFiles[filePath]) {
    return null;
  }

  const markdownContent = markdownFiles[filePath];
  const htmlContent = marked.parse(markdownContent);

  // Parse content structure
  const parsed = parseContentStructure(htmlContent);

  contentCache[cacheKey] = parsed;

  return parsed;
}

function parseContentStructure(html) {
  // Split by h2 tags (##)
  const h2Regex = /<h2[^>]*>(.*?)<\/h2>/gi;
  const sections = [];
  let lastIndex = 0;
  let match;
  let firstSectionContent = '';

  // Find first h2
  const firstH2Match = h2Regex.exec(html);

  if (firstH2Match) {
    // Everything before first h2 is introduction
    firstSectionContent = html.slice(0, firstH2Match.index).trim();

    // Reset regex lastIndex
    h2Regex.lastIndex = 0;

    // Find all h2 sections
    let prevIndex = firstH2Match.index + firstH2Match[0].length;

    while ((match = h2Regex.exec(html)) !== null) {
      const title = match[1];
      const content = html.slice(prevIndex, match.index).trim();
      sections.push({ title, content });
      prevIndex = match.index + match[0].length;
    }

    // Last section after final h2
    const lastContent = html.slice(prevIndex).trim();

    // Check if last section looks like a conclusion (starts with simple text)
    if (lastContent && sections.length > 0) {
      // Remove trailing conclusion if it seems like one (short paragraph)
      const conclusionMatch = lastContent.match(/^(<p>.*?<\/p>\s*)+$/i);
      if (conclusionMatch) {
        // This looks like a conclusion
        sections[sections.length - 1].content = html.slice(
          prevIndex,
          prevIndex + lastContent.indexOf(conclusionMatch[0])
        ).trim();
        return {
          intro: firstSectionContent,
          sections: sections.slice(0, -1),
          conclusion: conclusionMatch[0]
        };
      }
      sections[sections.length - 1].content = lastContent;
    }
  } else {
    // No h2 sections, treat all as introduction
    firstSectionContent = html;
  }

  // Find conclusion - usually the last paragraph or list that stands alone
  let conclusion = '';
  if (sections.length > 0) {
    const lastSection = sections[sections.length - 1];
    // Simple heuristic: conclusion is after last list or at end
    const conclusionParts = extractConclusion(lastSection.content);
    if (conclusionParts) {
      lastSection.content = conclusionParts.content;
      conclusion = conclusionParts.conclusion;
    }
  }

  return {
    intro: firstSectionContent,
    sections,
    conclusion
  };
}

function extractConclusion(content) {
  // Look for patterns typical of conclusions
  // Usually conclusion is a single paragraph or short text at the end
  const pRegex = /<p>(.*?)<\/p>/gi;
  const paragraphs = [];
  let match;

  while ((match = pRegex.exec(content)) !== null) {
    paragraphs.push({ text: match[1], index: match.index });
  }

  if (paragraphs.length >= 2) {
    // Check if last paragraph is a conclusion-like statement
    const lastP = paragraphs[paragraphs.length - 1];
    if (lastP.text.length < 200 && !lastP.text.includes('<ul>')) {
      // Likely a conclusion
      const contentBefore = content.slice(0, lastP.index).trim();
      return {
        content: contentBefore,
        conclusion: `<p>${lastP.text}</p>`
      };
    }
  }

  return null;
}

// Preload all content for a language
export function preloadContent(topicIds, lang) {
  topicIds.forEach(id => {
    getTopicContent(id, lang);
  });
}
