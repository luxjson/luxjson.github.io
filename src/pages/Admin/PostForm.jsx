import { useEffect, useState, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { motion } from 'framer-motion';
import { Save, X } from 'lucide-react';
import useCursor from '../../hooks/useCursor';

const iconBase = { strokeWidth: 2.5, size: 16, 'aria-hidden': true };

const INITIAL_FORM = {
  title: '',
  content: '',
  excerpt: '',
  cover_image: '',
  published: true,
};

export default function PostForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { api } = useAuth();
  useCursor();

  const isEditing = !!id;

  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [error, setError] = useState('');

  const loadPost = useCallback(async () => {
    setLoading(true);
    try {
      const res = await api.get(`/blog/posts/id/${id}`);
      const post = res.data.post;
      setFormData({
        title: post.title || '',
        content: post.content || '',
        excerpt: post.excerpt || '',
        cover_image: post.cover_image || '',
        published: post.published ?? true,
      });
    } catch (err) {
      console.error('Erro ao carregar post:', err);
      setError('Não foi possível carregar o post para edição.');
    } finally {
      setLoading(false);
    }
  }, [api, id]);

  useEffect(() => {
    if (isEditing) loadPost();
  }, [isEditing, loadPost]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError('');
    try {
      const endpoint = isEditing ? `/blog/posts/${id}` : '/blog/posts';
      const method = isEditing ? 'put' : 'post';
      const response = await api[method](endpoint, formData);
      if (response.data.success) {
        navigate('/admin/posts');
      } else {
        setError(response.data.message || 'Erro ao salvar post.');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Erro ao salvar post.');
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="sh-loading">Carregando post...</div>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="sh-form-container"
    >
      <h2 className="sh-form-title">{isEditing ? 'Editar Post' : 'Novo Post'}</h2>
      {error && <div className="sh-form-error" role="alert">{error}</div>}

      <form onSubmit={handleSubmit} className="sh-form">
        <div className="sh-input-group">
          <label className="fix" htmlFor="pf-title">TÍTULO</label>
          <input
            type="text"
            id="pf-title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Digite o título"
            required
          />
        </div>

        <div className="sh-input-group">
          <label className="fix" htmlFor="pf-excerpt">RESUMO</label>
          <input
            type="text"
            id="pf-excerpt"
            name="excerpt"
            value={formData.excerpt}
            onChange={handleChange}
            placeholder="Breve resumo do post"
          />
        </div>

        <div className="sh-input-group">
          <label className="fix" htmlFor="pf-cover">URL DA IMAGEM DE CAPA</label>
          <input
            type="url"
            id="pf-cover"
            name="cover_image"
            value={formData.cover_image}
            onChange={handleChange}
            placeholder="https://exemplo.com/imagem.jpg"
          />
        </div>

        <div className="sh-input-group">
          <label className="fix" htmlFor="pf-content">CONTEÚDO (HTML)</label>
          <textarea
            id="pf-content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            rows="15"
            placeholder="Escreva o conteúdo do post (HTML é suportado)..."
            required
          />
        </div>

        <div className="sh-input-group sh-checkbox-group">
          <label className="sh-checkbox-label">
            <input
              type="checkbox"
              name="published"
              checked={formData.published}
              onChange={handleChange}
            />
            <span>Publicar imediatamente</span>
          </label>
        </div>

        <div className="sh-form-actions">
          <button type="submit" className="sh-btn-primary" disabled={saving}>
            <Save {...iconBase} />
            {saving ? 'SALVANDO...' : isEditing ? 'ATUALIZAR' : 'CRIAR'}
          </button>
          <button
            type="button"
            className="sh-btn-secondary"
            onClick={() => navigate('/admin/posts')}
          >
            <X {...iconBase} /> CANCELAR
          </button>
        </div>
      </form>
    </motion.div>
  );
}
