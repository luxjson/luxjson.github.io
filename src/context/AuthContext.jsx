import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth deve ser usado dentro de AuthProvider');
  return context;
};

const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(localStorage.getItem('lux-token'));

  const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
    headers: { 'Content-Type': 'application/json' },
  });

  api.interceptors.request.use((config) => {
    const storedToken = localStorage.getItem('lux-token');
    if (storedToken) config.headers.Authorization = `Bearer ${storedToken}`;
    return config;
  });

  const login = async (username, password) => {
    try {
      const response = await api.post('/auth/login', { username, password });
      const { token, admin: adminData } = response.data;
      localStorage.setItem('lux-token', token);
      setToken(token);
      setAdmin(adminData);
      return { success: true };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || 'Erro ao fazer login',
      };
    }
  };

  const logout = () => {
    localStorage.removeItem('lux-token');
    setToken(null);
    setAdmin(null);
  };

  const checkAuth = async () => {
    if (!token) {
      setLoading(false);
      return;
    }
    try {
      const response = await api.get('/auth/me');
      setAdmin(response.data.admin);
    } catch {
      localStorage.removeItem('lux-token');
      setToken(null);
      setAdmin(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const value = { admin, loading, login, logout, api, isAuthenticated: !!admin };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;