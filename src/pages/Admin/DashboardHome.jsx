import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { motion } from 'framer-motion';

export default function DashboardHome() {
  const { api } = useAuth();
  const [stats, setStats] = useState({ posts: 0, views: 0, published: 0 });
  const [recentPosts, setRecentPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [statsRes, postsRes] = await Promise.all([
          api.get('/blog/stats'),
          api.get('/blog/posts?limit=5&publishedOnly=false'),
        ]);
        setStats(statsRes.data);
        setRecentPosts(postsRes.data.posts || []);
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [api]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  if (loading) {
    return <div className="sh-loading">Carregando...</div>;
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="sh-dashboard-home"
    >
      <motion.div variants={itemVariants} className="sh-dashboard-stats">
        <div className="sh-stat-card">
          <h3 className="fix">{stats.published}</h3>
          <p>Posts Publicados</p>
        </div>
        <div className="sh-stat-card">
          <h3 className="fix">{stats.views}</h3>
          <p>Visualizações</p>
        </div>
        <div className="sh-stat-card">
          <h3 className="fix">{stats.posts}</h3>
          <p>Total de Posts</p>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="sh-recent-posts">
        <h2>Posts Recentes</h2>
        {recentPosts.length === 0 ? (
          <p>Nenhum post encontrado.</p>
        ) : (
          <div className="sh-table-wrapper" style={{ marginTop: '20px' }}>
            <table className="sh-table">
              <thead>
                <tr>
                  <th>Título</th>
                  <th>Status</th>
                  <th>Data</th>
                </tr>
              </thead>
              <tbody>
                {recentPosts.map((post) => (
                  <motion.tr
                    key={post.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <td>{post.title}</td>
                    <td>
                      <span className={`sh-status-badge ${post.published ? 'published' : 'draft'}`}>
                        {post.published ? 'Publicado' : 'Rascunho'}
                      </span>
                    </td>
                    <td className="fix">{new Date(post.created_at).toLocaleDateString('pt-BR')}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}