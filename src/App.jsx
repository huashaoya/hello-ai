import { useState, useCallback } from 'react';
import './styles/layout.css';
import './styles/components.css';
import './styles/pages.css';

import { Header } from './components/Layout/Header';
import { Sidebar } from './components/Layout/Sidebar';
import { Footer } from './components/Layout/Footer';
import { Home } from './pages/Home';
import { TopicPage } from './pages/TopicPage';
import { CategoryPage } from './pages/CategoryPage';
import { useDarkMode } from './hooks/useDarkMode';
import { getTopics } from './data/topics';

function App() {
  const { isDark, toggleDarkMode } = useDarkMode();
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('ai-encyclopedia-lang');
    return saved || 'zh';
  });
  const [state, setState] = useState({
    currentPage: 'home',
    selectedTopic: null,
    selectedCategory: null,
    currentTopicCategory: null
  });
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleLang = useCallback(() => {
    setLang(prev => {
      const newLang = prev === 'en' ? 'zh' : 'en';
      localStorage.setItem('ai-encyclopedia-lang', newLang);
      return newLang;
    });
  }, []);

  const navigateTo = useCallback((page, options = {}) => {
    setState(prev => ({
      currentPage: page,
      selectedTopic: options.topicId || null,
      selectedCategory: page === 'category' ? (options.categoryId || null) : null,
      currentTopicCategory: page === 'topic' ? (options.categoryId || null) : null
    }));
    setSidebarOpen(false);
  }, []);

  const goHome = useCallback(() => {
    setState({
      currentPage: 'home',
      selectedTopic: null,
      selectedCategory: null,
      currentTopicCategory: null
    });
    setSidebarOpen(false);
    setSearchQuery('');
  }, []);

  const goBack = useCallback(() => {
    setState(prev => {
      if (prev.selectedTopic) {
        return { ...prev, currentPage: 'home', selectedTopic: null, currentTopicCategory: null };
      }
      if (prev.selectedCategory) {
        return { ...prev, currentPage: 'home', selectedCategory: null };
      }
      return prev;
    });
  }, []);

  const handleTopicClick = (topicId) => {
    const topics = getTopics(lang);
    const topic = topics.find(t => t.id === topicId);
    const categoryId = topic?.category || null;
    navigateTo('topic', { topicId, categoryId });
  };

  const handleCategoryClick = (categoryId) => {
    if (categoryId) {
      navigateTo('category', { categoryId });
    } else {
      goHome();
    }
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    if (query && state.currentPage === 'home') {
      // Stay on home page, just filter
    }
  };

  const renderPage = () => {
    switch (state.currentPage) {
      case 'topic':
        return (
          <TopicPage
            topicId={state.selectedTopic}
            onBack={goBack}
            onTopicClick={handleTopicClick}
            lang={lang}
          />
        );
      case 'category':
        return (
          <CategoryPage
            categoryId={state.selectedCategory}
            onBack={goBack}
            onTopicClick={handleTopicClick}
            lang={lang}
          />
        );
      default:
        return <Home onTopicClick={handleTopicClick} lang={lang} searchQuery={searchQuery} />;
    }
  };

  return (
    <div className="app">
      <Header
        onLogoClick={goHome}
        lang={lang}
        onToggleLang={toggleLang}
        isDark={isDark}
        onToggleDark={toggleDarkMode}
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
      />

      {/* Mobile menu button */}
      <button
        className="mobile-menu-btn"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Toggle menu"
      >
        {sidebarOpen ? '✕' : '☰'}
      </button>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <Sidebar
        selectedCategory={state.currentPage === 'category' ? state.selectedCategory : state.currentTopicCategory}
        onCategoryClick={handleCategoryClick}
        lang={lang}
        isOpen={sidebarOpen}
      />

      <main className="main">
        <div className="main__content">
          {renderPage()}
        </div>
        <Footer lang={lang} />
      </main>
    </div>
  );
}

export default App;
