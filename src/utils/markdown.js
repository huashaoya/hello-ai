import { marked } from 'marked';

marked.setOptions({
  breaks: true,
  gfm: true
});

export function parseMarkdown(content) {
  const html = marked.parse(content);
  return { __html: html };
}
