import { useMemo } from 'react';
import { Badge } from '../UI/Badge';
import { Button } from '../UI/Button';
import { Section } from '../UI/Section';
import { getTopics } from '../../data/topics';
import { getTopicContent } from '../../utils/contentLoader';
import { parseMarkdown } from '../../utils/markdown';
import './TopicDetail.css';

export function TopicDetail({ topicId, onBack, onTopicClick, lang }) {
  const topics = getTopics(lang);
  const topic = topics.find(t => t.id === topicId);

  const content = useMemo(() => {
    return getTopicContent(topicId, lang);
  }, [topicId, lang]);

  if (!topic) return null;

  const relatedTopics = topic.relatedTopics
    ? topic.relatedTopics
        .map(id => topics.find(t => t.id === id))
        .filter(Boolean)
    : [];

  // Parse the first part as introduction (before first h2)
  const introHtml = content?.intro || '';
  const sectionsHtml = content?.sections || [];
  const conclusionHtml = content?.conclusion || '';

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

      {introHtml && (
        <div className="topic-detail__intro" dangerouslySetInnerHTML={parseMarkdown(introHtml)} />
      )}

      {sectionsHtml.map((section, index) => (
        <Section key={index} title={section.title}>
          <div className="topic-detail__section-content" dangerouslySetInnerHTML={parseMarkdown(section.content)} />
        </Section>
      ))}

      {conclusionHtml && (
        <div className="topic-detail__conclusion" dangerouslySetInnerHTML={parseMarkdown(conclusionHtml)} />
      )}

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
    </article>
  );
}
