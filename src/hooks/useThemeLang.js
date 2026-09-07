import { useState, useEffect } from 'react';

/**
 * Hook que centraliza estado de tema e idioma.
 * Antes duplicado em Blog.jsx, BlogPost.jsx, luxjson.jsx, NotFound.jsx...
 */
export default function useThemeLang() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('lux-theme') || 'light'
  );
  const [language, setLanguage] = useState(
    () => localStorage.getItem('lux-language') || 'pt'
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('lux-theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('lux-language', language);
  }, [language]);

  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  const toggleLanguage = () => setLanguage((prev) => (prev === 'pt' ? 'en' : 'pt'));

  return { theme, language, toggleTheme, toggleLanguage };
}
