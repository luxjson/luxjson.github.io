import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import useCursor from '../hooks/useCursor';
import useThemeLang from '../hooks/useThemeLang';
import renderMixedText from '../utils/renderMixedText';
import '../assets/styles/blog.css';

const iconBase = { strokeWidth: 2.5, 'aria-hidden': true };

export default function NotFound() {
  const navigate = useNavigate();
  // theme aplicado globalmente via hook
  useThemeLang();
  useCursor();

  return (
    <div
      className="sohub-root selection:bg-black selection:text-white"
      style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <main style={{ width: '100%' }}>
        <div className="sh-hero" style={{ minHeight: 'auto' }}>
          <div className="sh-hero-container" style={{ justifyContent: 'center' }}>
            <div
              className="sh-hero-text"
              style={{ textAlign: 'center', alignItems: 'center' }}
            >
              <h1
                className="sh-giant-title"
                style={{ fontSize: 'clamp(60px, 15vw, 150px)', textAlign: 'center' }}
              >
                {renderMixedText('404', true)}
              </h1>
              <p
                className="sh-hero-sub"
                style={{ fontSize: 'clamp(18px, 3vw, 36px)', textAlign: 'center' }}
              >
                Page Not Found
              </p>
              <button
                onClick={() => navigate('/')}
                className="sh-chat-btn"
                style={{ marginTop: 40, border: 'none', cursor: 'pointer' }}
              >
                <span>Back to Home</span>
                <div className="sh-circle-icon">
                  <ArrowLeft {...iconBase} size={18} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
