import { useState, useCallback, useEffect } from 'react';

export function useDarkMode() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('ai-encyclopedia-theme');
    if (saved !== null) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('ai-encyclopedia-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleDarkMode = useCallback(() => {
    setIsDark(prev => !prev);
  }, []);

  return { isDark, toggleDarkMode };
}
