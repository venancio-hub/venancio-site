import { useState, useEffect } from 'react';
import { translations } from '@/lib/i18n';

export const useLanguage = () => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('appLanguage') || 'pt';
  });

  useEffect(() => {
    localStorage.setItem('appLanguage', language);
  }, [language]);

  const t = translations[language];

  return { language, setLanguage, t };
};