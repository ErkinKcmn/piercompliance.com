import { useState, useEffect } from 'react';

export type Language = 'tr' | 'en';

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('pier-compliance-language');
    return (saved as Language) || 'tr'; // Default to Turkish
  });

  const [forceUpdate, setForceUpdate] = useState(0);

  useEffect(() => {
    localStorage.setItem('pier-compliance-language', language);
    document.documentElement.lang = language;
    
    // Update document title immediately
    document.title = language === 'tr' 
      ? 'Pier Compliance - Düzenleyici İşler ve Hukuki Danışmanlık | Dünya Çapında Hizmet'
      : 'Pier Compliance - Regulatory Affairs and Legal Consultancy | Worldwide Service';
    
    // Force re-render by updating state
    setForceUpdate(prev => prev + 1);
  }, [language]);

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'tr' ? 'en' : 'tr');
  };

  return { language, setLanguage: changeLanguage, toggleLanguage, forceUpdate };
};