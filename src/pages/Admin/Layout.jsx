import React, { useState } from 'react';
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { motion } from 'framer-motion';

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { admin, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const navItems = [
    { path: '/admin', icon: 'dashboard', label: 'Dashboard' },
    { path: '/admin/posts', icon: 'article', label: 'Posts' },
    { path: '/admin/posts/new', icon: 'add_circle', label: 'Novo Post' },
  ];

  // Identifica dinamicamente o título da página atual com base na rota
  const getPageTitle = () => {
    if (location.pathname === '/admin') return 'Dashboard';
    if (location.pathname === '/admin/posts') return 'Posts';
    if (location.pathname === '/admin/posts/new') return 'Novo Post';
    return 'Painel';
  };

  return (
    <div className="sh-admin-layout">
      <aside className={`sh-admin-sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
        <div className="sh-admin-sidebar-header">
          <h2>{sidebarOpen && 'LUXJSON'}</h2>
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="sh-sidebar-toggle" aria-label="Menu">
            <i className="material-icons">{sidebarOpen ? 'chevron_left' : 'chevron_right'}</i>
          </button>
        </div>
        <nav className="sh-admin-nav">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`sh-admin-nav-link ${location.pathname === item.path ? 'active' : ''}`}
            >
              <i className="material-icons">{item.icon}</i>
              {sidebarOpen && <span>{item.label}</span>}
            </Link>
          ))}
        </nav>
        <div className="sh-admin-sidebar-footer">
          <div className="sh-admin-user">
            {sidebarOpen && <span>{admin?.username || 'Admin'}</span>}
            <button onClick={handleLogout} className="sh-admin-logout" aria-label="Sair">
              <i className="material-icons">logout</i>
            </button>
          </div>
        </div>
      </aside>

      <motion.main
        className="sh-admin-main"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="sh-admin-topbar">
          <h1>{getPageTitle()}</h1>
        </div>
        <div className="sh-admin-content">
          <Outlet />
        </div>
      </motion.main>
    </div>
  );
}