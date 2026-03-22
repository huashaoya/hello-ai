import { useState, useCallback } from 'react';

export function useNavigation() {
  const [state, setState] = useState({
    currentPage: 'home',
    selectedTopic: null,
    selectedCategory: null
  });

  const navigateTo = useCallback((page, options = {}) => {
    setState({
      currentPage: page,
      selectedTopic: options.topicId || null,
      selectedCategory: options.categoryId || null
    });
  }, []);

  const goHome = useCallback(() => {
    setState({
      currentPage: 'home',
      selectedTopic: null,
      selectedCategory: null
    });
  }, []);

  const goBack = useCallback(() => {
    setState(prev => {
      if (prev.selectedTopic) {
        return { ...prev, currentPage: 'home', selectedTopic: null };
      }
      if (prev.selectedCategory) {
        return { ...prev, currentPage: 'home', selectedCategory: null };
      }
      return prev;
    });
  }, []);

  return {
    ...state,
    navigateTo,
    goHome,
    goBack
  };
}
