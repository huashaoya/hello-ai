import { TopicCard } from '../components/Topics/TopicCard';
import { getCategories, getTopics } from '../data/topics';
import { Button } from '../components/UI/Button';
import './CategoryPage.css';

export function CategoryPage({ categoryId, onBack, onTopicClick, lang }) {
  const categories = getCategories(lang);
  const topics = getTopics(lang);
  const category = categories.find(c => c.id === categoryId);

  const filteredTopics = categoryId === 'latest'
    ? topics.filter(t => t.isNew)
    : topics.filter(t => t.category === categoryId);

  return (
    <div className="category-page">
      <header className="category-page__header">
        <Button variant="secondary" size="sm" onClick={onBack}>
          ← {lang === 'zh' ? '返回' : 'Back'}
        </Button>
        <div className="category-page__title-wrapper">
          <span className="category-page__icon">{category?.icon}</span>
          <h1 className="category-page__title">{category?.name}</h1>
        </div>
        <p className="category-page__count">
          {filteredTopics.length} {filteredTopics.length === 1 ? (lang === 'zh' ? '个主题' : 'topic') : (lang === 'zh' ? '个主题' : 'topics')}
        </p>
      </header>

      <div className="category-page__grid">
        {filteredTopics.map(topic => (
          <TopicCard
            key={topic.id}
            topic={topic}
            onClick={onTopicClick}
            lang={lang}
          />
        ))}
      </div>
    </div>
  );
}
