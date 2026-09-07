import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Mail } from 'lucide-react';
import brFlag from '../assets/images/br.svg';
import ukFlag from '../assets/images/uk.svg';
const iconBase = { strokeWidth: 2.5, 'aria-hidden': true };
export default function Header({
  theme,
  toggleTheme,
  language,
  toggleLanguage,
  t,
  onChatOpen,
  homeLink = 'link',
  showWorkLink = true,
}) {
  const navigate = useNavigate();

  const handleHomeClick = (e) => {
    e.preventDefault();
    if (homeLink === 'scroll') {
      document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  const handleWorkClick = (e) => {
    e.preventDefault();
    if (homeLink === 'scroll') {
      document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <>
      <div className="sh-float-buttons">
        <motion.button
          className="sh-theme-toggle"
          onClick={toggleTheme}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Alternar tema"
          >
          <AnimatePresence mode="wait">
            <motion.span
              key={theme}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              className="lucide-icon"
              style={{ paddingTop: '5px' }}
              >
              {theme === 'light' ? (
                <Moon {...iconBase} size={20} />
              ) : (
                <Sun {...iconBase} size={20} />
              )}
            </motion.span>
          </AnimatePresence>
        </motion.button>

        <motion.button
          className="sh-lang-toggle"
          onClick={toggleLanguage}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Alternar idioma"
        >
          <img
            src={language === 'pt' ? brFlag : ukFlag}
            alt={language === 'pt' ? 'Português' : 'English'}
            className="sh-lang-flag-img"
          />
        </motion.button>
      </div>

      <header className="sh-header">
        <div className="sh-nav-pill">
          <a
            href="/"
            onClick={handleHomeClick}
            className="sh-logo-nav"
            aria-label="Ir para o início"
          >
            luxjson
          </a>

          <div className="sh-nav-links">
            {showWorkLink && (
              <a
                href="/#work"
                onClick={handleWorkClick}
                style={{ cursor: 'pointer' }}
              >
                {t('headerWork')}
              </a>
            )}

            <Link to="/blog">{t('headerBlog')}</Link>

            <button
              onClick={onChatOpen}
              className="sh-chat-btn"
              aria-label="Abrir contato"
            >
              <span>{t('headerChat')}</span>
              <div className="sh-circle-icon sh-circle-icon-chat">
                <Mail style={{ color: '#fff' }} size={18} />
              </div>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
