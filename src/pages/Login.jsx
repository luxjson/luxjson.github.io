import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import svgLogo from '../assets/images/logo.jpg';
import '../assets/styles/admin.css';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    const result = await login(username, password);
    setLoading(false);
    if (result.success) {
      navigate('/admin');
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="sh-login-page">
      <div className="sh-login-wrapper">
        {/* Lado Esquerdo: Formulário */}
        <div className="sh-login-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="sh-login-card"
          >
            <div className="sh-login-header">
              <h1>LUXJSON</h1>
              <p>Painel Administrativo</p>
            </div>
            <form onSubmit={handleSubmit} className="sh-login-form">
              <div className="sh-input-group">
                <label className="fix">USUÁRIO</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="admin"
                  required
                />
              </div>
              <div className="sh-input-group">
                <label className="fix">SENHA</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                />
              </div>
              {error && <div className="sh-login-error">{error}</div>}
              <button type="submit" className="sh-login-btn" disabled={loading}>
                {loading ? 'ENTRANDO...' : 'ENTRAR'}
              </button>
            </form>
          </motion.div>
        </div>

        {/* Lado Direito: Imagem / Estúdio Deadsmile */}
        <div className="sh-login-right">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="sh-login-right-content"
          >
            <img src={svgLogo} alt="DEADSMILE Logo" className="sh-login-right-logo" />
            <p className="fix" style={{ color: '#ffd900', fontSize: '14px', letterSpacing: '2px' }}>
              Create worlds. Explore beyond.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}