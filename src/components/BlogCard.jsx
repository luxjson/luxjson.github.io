import { Link } from 'react-router-dom';
import { Eye, CalendarDays } from 'lucide-react';

const iconBase = { strokeWidth: 2.5, size: 14, 'aria-hidden': true };

/**
 * Card de preview de post do blog.
 * Substituído material-icons por Lucide.
 */
export default function BlogCard({ post }) {
  const formattedDate = new Date(post.published_at || post.created_at)
    .toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });

  return (
    <Link to={`/blog/${post.slug}`} className="blog-card-link">
      <article className="blog-card">
        {post.cover_image && (
          <div className="blog-card-image">
            <img src={post.cover_image} alt={post.title} loading="lazy" />
          </div>
        )}
        <div className="blog-card-content">
          <h3 className="blog-card-title">{post.title}</h3>
          {post.excerpt && <p className="blog-card-excerpt">{post.excerpt}</p>}
          <div className="blog-card-footer">
            <span className="blog-card-date">
              <CalendarDays {...iconBase} /> {formattedDate}
            </span>
            {post.views > 0 && (
              <span className="blog-card-views">
                <Eye {...iconBase} /> {post.views}
              </span>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
}
