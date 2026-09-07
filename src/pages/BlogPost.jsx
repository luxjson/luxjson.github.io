import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
import { CalendarDays, Clock, Eye, ArrowLeft } from 'lucide-react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';
import InfoDrawer from '../components/InfoDrawer';

import useCursor from '../hooks/useCursor';
import useThemeLang from '../hooks/useThemeLang';

import { createT } from '../utils/translations';
import renderMixedText from '../utils/renderMixedText';

import '../assets/styles/blog.css';

const iconBase = { strokeWidth: 2.5, 'aria-hidden': true };

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
});

function calculateReadingTime(content) {
  if (!content) return 1;
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { theme, language, toggleTheme, toggleLanguage } = useThemeLang();
  const t = createT(language);
  useCursor();

  const [post, setPost] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await api.get(`/blog/posts/${slug}`);
        setPost(res.data.post);
      } catch (err) {
        console.error('Erro ao buscar post:', err);
        setError(t('notFound'));
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  // Busca user do GitHub só para o footer
  useEffect(() => {
    fetch('https://api.github.com/users/luxjson')
      .then((r) => r.ok ? r.json() : null)
      .then((data) => data && setUser(data))
      .catch(() => {});
  }, []);

  const formatDate = (dateStr) =>
    new Date(dateStr).toLocaleDateString(language === 'pt' ? 'pt-BR' : 'en-US', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });

  const sharedHeaderProps = {
    theme, toggleTheme, language, toggleLanguage, t,
    onChatOpen: () => setIsChatOpen(true),
    homeLink: 'link',
    showWorkLink: false,
  };

  if (loading) {
    return (
      <div className="sohub-root">
        <Header {...sharedHeaderProps} />
        <div className="sh-loading" aria-live="polite">Carregando...</div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="sohub-root">
        <Header {...sharedHeaderProps} />
        <main className="sh-hero" style={{ minHeight: '80vh' }}>
          <div className="sh-hero-container">
            <div className="sh-hero-text" style={{ textAlign: 'center' }}>
              <h1 className="sh-giant-title" style={{ fontSize: 'clamp(60px, 10vw, 120px)' }}>
                {renderMixedText('404', true)}
              </h1>
              <p className="sh-hero-sub">{error || t('notFound')}</p>
              <button
                onClick={() => navigate('/blog')}
                className="sh-chat-btn"
                style={{ marginTop: 40, border: 'none', cursor: 'pointer' }}
              >
                <span>{t('backToBlog')}</span>
                <div className="sh-circle-icon">
                  <ArrowLeft {...iconBase} size={18} />
                </div>
              </button>
            </div>
          </div>
        </main>
        <Footer t={t} user={user} onInfoOpen={() => setIsInfoOpen(true)} />
        <InfoDrawer isOpen={isInfoOpen} onClose={() => setIsInfoOpen(false)} t={t} user={user} />
      </div>
    );
  }

  const readingTime = calculateReadingTime(post.content);

  return (
    <div className="sohub-root selection:bg-black selection:text-white">
      <Header {...sharedHeaderProps} />

      <main className="sh-blog-post-main">
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="sh-blog-post-article"
        >
          <h1 className="sh-blog-post-title">{post.title}</h1>

          <div className="sh-blog-post-meta">
            <span className="sh-blog-post-meta-item">
              <CalendarDays {...iconBase} size={16} />
              {formatDate(post.published_at || post.created_at)}
            </span>
            <span className="sh-blog-post-meta-item">
              <Clock {...iconBase} size={16} />
              {readingTime} {t('readingTime')}
            </span>
            {post.views > 0 && (
              <span className="sh-blog-post-meta-item">
                <Eye {...iconBase} size={16} />
                {post.views} {t('views')}
              </span>
            )}
          </div>

          {post.cover_image && (
            <div className="sh-blog-post-cover">
              <img
                src={post.cover_image}
                alt={post.title}
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
          )}

          {/* ⚠️ Segurança: conteúdo do post renderizado como HTML.
              Certifique-se de que o backend sanitiza o HTML (ex: DOMPurify)
              antes de salvar no banco de dados. */}
          <div
            className="sh-blog-post-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="sh-blog-post-footer">
            <button
              onClick={() => navigate('/blog')}
              className="sh-blog-post-back-btn"
            >
              <ArrowLeft {...iconBase} size={18} />
              {t('backToBlog')}
            </button>
          </div>
        </motion.article>
      </main>

      <Footer t={t} user={user} onInfoOpen={() => setIsInfoOpen(true)} />

      <ContactModal
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        t={t}
        language={language}
      />
      <InfoDrawer
        isOpen={isInfoOpen}
        onClose={() => setIsInfoOpen(false)}
        t={t}
        user={user}
      />
    </div>
  );
}
