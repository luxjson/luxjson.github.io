import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar"; 
import Footer from "../components/Footer";

// Assets
import iconPink from "../assets/images/icon-pink.png";
import '../assets/styles/home.css';

export default function Home() {

  return (
    <div className="pixel-page">
      <Sidebar />

      <main className="pixel-container">
        
        {/* HERO SECTION - Inspirado no Pixels.xyz Hero */}
        <section className="pixel-hero">
          <div className="hero-grid">
            <div className="hero-text">
              <h1 className="hero-title">A NEW ERA OF<br/>RETRO GAMING</h1>
              <p className="hero-description">
                Experience high-fidelity adventures forged in pixels. 
                The standard for modern-retro gameplay has been redefined.
              </p>
              <div className="hero-btns">
                <Link to="/games" className="pixel-btn-primary">START PLAYING</Link>
                <Link to="/about" className="pixel-btn-secondary">LEARN MORE</Link>
              </div>
            </div>
            <div className="hero-visual">
                <img src={iconPink} alt="Somiari" className="floating-cat" />
            </div>
          </div>
        </section>

        {/* STATS STRIP - Estilo Pixels.xyz stats */}
        <div className="stats-strip">
          <div className="stat-item">
            <span className="stat-val">02</span>
            <span className="stat-label">GAMES RELEASED</span>
          </div>
          <div className="stat-item">
            <span className="stat-val">2026</span>
            <span className="stat-label">FOUNDED YEAR</span>
          </div>
          <div className="stat-item">
            <span className="stat-val">100%</span>
            <span className="stat-label">INDEPENDENT</span>
          </div>
        </div>

        {/* ABOUT SECTION - THE MISSION */}
        <section className="pixel-section-dark">
          <div className="section-content">
            <h2 className="label-formal">The Studio Mission</h2>
            <div className="about-split">
              <h3 className="display-text">RETRO SOUL.<br/>MODERN HEART.</h3>
              <p className="body-text">
                Somiari is an independent boutique studio specialized in high-fidelity 
                gameplay. We take the nostalgic essence of the old era and inject 
                it with cutting-edge technology. Our mission is to build digital 
                worlds where every pixel tells a story.
              </p>
            </div>
          </div>
        </section>

        <Footer />

        
      </main>
    </div>
  );
}