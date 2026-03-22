import { Badge } from '../UI/Badge';
import { Button } from '../UI/Button';
import { Section } from '../UI/Section';
import { getTopics } from '../../data/topics';
import './TopicDetail.css';

export function TopicDetail({ topicId, onBack, onTopicClick, lang }) {
  const topics = getTopics(lang);
  const topic = topics.find(t => t.id === topicId);
  if (!topic) return null;

  const relatedTopics = topic.relatedTopics
    .map(id => topics.find(t => t.id === id))
    .filter(Boolean);

  const renderParagraph = (paragraph, index) => {
    // Handle code blocks
    if (paragraph.startsWith('```')) {
      const code = paragraph.replace(/^```\w*\n?/, '').replace(/\n?```$/, '');
      return <pre key={index} className="topic-detail__code"><code>{code}</code></pre>;
    }

    if (paragraph.startsWith('•') || paragraph.startsWith('**')) {
      const lines = paragraph.split('\n').filter(l => l.trim());
      return (
        <ul key={index} className="topic-detail__list">
          {lines.map((line, j) => {
            const parts = line.replace(/^\•\s*/, '').split(/(\*\*.*?\*\*)/g);
            return (
              <li key={j}>
                {parts.map((part, k) => {
                  if (part.startsWith('**') && part.endsWith('**')) {
                    return <strong key={k}>{part.slice(2, -2)}</strong>;
                  }
                  return part;
                })}
              </li>
            );
          })}
        </ul>
      );
    }
    const parts = paragraph.split(/(\*\*.*?\*\*)/g);
    return (
      <p key={index}>
        {parts.map((part, i) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={i}>{part.slice(2, -2)}</strong>;
          }
          return part;
        })}
      </p>
    );
  };

  const renderSection = (content) => {
    // Split content by code blocks while preserving them
    const parts = [];
    const codeBlockRegex = /```[\s\S]*?```/g;
    let lastIndex = 0;
    let match;

    while ((match = codeBlockRegex.exec(content)) !== null) {
      // Add text before the code block
      if (match.index > lastIndex) {
        const text = content.slice(lastIndex, match.index);
        parts.push(...text.split('\n\n').filter(p => p.trim()));
      }
      // Add the code block
      parts.push(match[0]);
      lastIndex = match.index + match[0].length;
    }

    // Add remaining text
    if (lastIndex < content.length) {
      const text = content.slice(lastIndex);
      parts.push(...text.split('\n\n').filter(p => p.trim()));
    }

    return parts.map((para, i) => renderParagraph(para, i));
  };

  return (
    <article className="topic-detail">
      <header className="topic-detail__header">
        <Button variant="secondary" size="sm" onClick={onBack}>
          ← {lang === 'zh' ? '返回' : 'Back'}
        </Button>
        <Badge categoryId={topic.category} size="lg" lang={lang} />
      </header>

      <h1 className="topic-detail__title">{topic.title}</h1>
      <p className="topic-detail__summary">{topic.summary}</p>

      <div className="topic-detail__intro">
        <p>{topic.content.introduction}</p>
      </div>

      {topic.content.sections.map((section, index) => (
        <Section key={index} title={section.title}>
          {renderSection(section.content)}
        </Section>
      ))}

      <Section title={lang === 'zh' ? '核心概念' : 'Key Concepts'}>
        <div className="topic-detail__concepts">
          {topic.keyConcepts.map((concept, i) => (
            <span key={i} className="topic-detail__concept">{concept}</span>
          ))}
        </div>
      </Section>

      {relatedTopics.length > 0 && (
        <Section title={lang === 'zh' ? '相关主题' : 'Related Topics'}>
          <div className="topic-detail__related">
            {relatedTopics.map(related => (
              <button
                key={related.id}
                className="topic-detail__related-item"
                onClick={() => onTopicClick(related.id)}
              >
                <span className="topic-detail__related-icon">
                  {related.category === 'ml' ? '🤖' :
                   related.category === 'deep-learning' ? '🧠' :
                   related.category === 'nlp' ? '💬' :
                   related.category === 'vision' ? '👁️' : '🚀'}
                </span>
                <span className="topic-detail__related-title">{related.title}</span>
              </button>
            ))}
          </div>
        </Section>
      )}

      <div className="topic-detail__conclusion">
        <p>{topic.content.conclusion}</p>
      </div>
    </article>
  );
}
