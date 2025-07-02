import { useState, useEffect } from 'react';

export type Language = 'tr' | 'en';

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('pier-compliance-language');
    return (saved as Language) || 'tr'; // Default to Turkish
  });

  useEffect(() => {
    localStorage.setItem('pier-compliance-language', language);
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'tr' ? 'en' : 'tr');
  };

  return { language, setLanguage, toggleLanguage };
};