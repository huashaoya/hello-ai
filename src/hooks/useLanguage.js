import { useState, useCallback, useMemo } from 'react';
import { translations } from '../data/i18n';

export function useLanguage() {
  const [lang, setLang] = useState('en');

  const toggleLang = useCallback(() => {
    setLang(prev => prev === 'en' ? 'zh' : 'en');
  }, []);

  const t = useCallback((key) => {
    return translations[lang][key] || key;
  }, [lang]);

  const tCategory = useCallback((categoryId) => {
    return translations[lang][categoryId] || categoryId;
  }, [lang]);

  return {
    lang,
    toggleLang,
    t,
    tCategory
  };
}
