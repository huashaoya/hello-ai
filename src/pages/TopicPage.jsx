import { TopicDetail } from '../components/Topics/TopicDetail';
import './TopicPage.css';

export function TopicPage({ topicId, onBack, onTopicClick, lang }) {
  return (
    <div className="topic-page">
      <TopicDetail
        topicId={topicId}
        onBack={onBack}
        onTopicClick={onTopicClick}
        lang={lang}
      />
    </div>
  );
}
