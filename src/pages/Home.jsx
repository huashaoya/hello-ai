import { TopicCard } from '../components/Topics/TopicCard';
import { getTopics } from '../data/topics';
import './Home.css';

export function Home({ onTopicClick, lang, searchQuery }) {
  const allTopics = getTopics(lang);

  const filteredTopics = searchQuery
    ? allTopics.filter(topic =>
        topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        topic.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        topic.keyConcepts.some(concept =>
          concept.toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
    : allTopics;

  return (
    <div className="home">
      <header className="home__header">
        {searchQuery ? (
          <>
            <h1 className="home__title">
              {lang === 'zh' ? '搜索结果' : 'Search Results'}
            </h1>
            <p className="home__subtitle">
              {lang === 'zh'
                ? `找到 ${filteredTopics.length} 个与 "${searchQuery}" 相关的主题`
                : `Found ${filteredTopics.length} topics matching "${searchQuery}"`}
            </p>
          </>
        ) : (
          <>
            <h1 className="home__title">
              {lang === 'zh' ? '探索AI知识' : 'Explore AI Knowledge'}
            </h1>
            <p className="home__subtitle">
              {lang === 'zh'
                ? '发现驱动人工智能的基础概念和前沿技术。'
                : 'Discover the fundamental concepts and cutting-edge technologies that power artificial intelligence.'}
            </p>
          </>
        )}
      </header>

      {filteredTopics.length > 0 ? (
        <div className="home__grid">
          {filteredTopics.map(topic => (
            <TopicCard
              key={topic.id}
              topic={topic}
              onClick={onTopicClick}
              lang={lang}
            />
          ))}
        </div>
      ) : (
        <div className="home__empty">
          <p className="home__empty-icon">🔍</p>
          <p className="home__empty-text">
            {lang === 'zh' ? '未找到相关主题' : 'No topics found'}
          </p>
          <p className="home__empty-hint">
            {lang === 'zh' ? '尝试其他关键词' : 'Try different keywords'}
          </p>
        </div>
      )}
    </div>
  );
}
