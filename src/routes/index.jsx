import { Routes, Route } from "react-router-dom";
import Luxjson from "../pages/luxjson";
import Insomnia from "../pages/insomnia";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Blog from "../pages/Blog";
import BlogPost from "../pages/BlogPost";
import AdminLayout from "../pages/Admin/Layout";
import DashboardHome from "../pages/Admin/DashboardHome";
import PostsList from "../pages/Admin/PostsList";
import PostForm from "../pages/Admin/PostForm";
import { ProtectedRoute } from "../components/ProtectedRoute";

export default function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Luxjson />} />
      <Route path="/insomnia" element={<Insomnia />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />

      <Route path="/login" element={<Login />} />
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<DashboardHome />} />
        <Route path="posts" element={<PostsList />} />
        <Route path="posts/new" element={<PostForm />} />
        <Route path="settings" element={<div>Configurações (em breve)</div>} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}