import { Badge } from '../UI/Badge';
import './TopicCard.css';

export function TopicCard({ topic, onClick, lang }) {
  return (
    <article className="topic-card" onClick={() => onClick(topic.id)}>
      <div className="topic-card__header">
        <Badge categoryId={topic.category} size="sm" lang={lang} />
        {topic.isNew && (
          <span className="topic-card__new-badge">
            {lang === 'zh' ? '新' : 'New'}
          </span>
        )}
      </div>
      <h3 className="topic-card__title">{topic.title}</h3>
      <p className="topic-card__summary">{topic.summary}</p>
      <div className="topic-card__footer">
        <span className="topic-card__concepts">
          {topic.keyConcepts.slice(0, 3).join(' • ')}
        </span>
        <span className="topic-card__arrow">→</span>
      </div>
    </article>
  );
}
