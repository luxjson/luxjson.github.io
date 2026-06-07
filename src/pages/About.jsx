import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

// Importação dos estilos (seguindo o padrão de reuso da home)
import "../assets/styles/about.css";

// Assets
import logoPink from "../assets/images/logo-pink.png";

export default function About() {
  return (
    <div className="pixel-page">
      <Sidebar />

      <main className="pixel-container">
        {/* HERO ABOUT */}
        <header className="pixel-section-purple about-header-spacing">
          <div className="section-content">
            <span className="hero-tag white-tag">Behind the pixels</span>
            <h1 className="hero-title">OUR STORY &<br/>PHILOSOPHY</h1>
            <p className="hero-description white-text">
              We are a boutique studio located in the digital void, 
              dedicated to the craft of high-fidelity retro gaming.
            </p>
          </div>
        </header>

        {/* SECTION 01: THE ORIGIN */}
        <section className="pixel-section-dark">
          <div className="section-content">
            <h2 className="label-formal">The Studio</h2>
            <div className="about-main-grid">
              <div className="about-text-block">
                <h3 className="display-text">RETRO SOUL.<br/>MODERN HEART.</h3>
                <p className="body-text">
                  Founded in <span className="fix">2025</span>, <strong>SOMIARI</strong> was born from a simple realization: 
                  the most powerful gaming experiences live at the intersection of nostalgia and 
                  innovation. We don't just "make games"—we forge digital artifacts.
                </p>
                <p className="body-text">
                  Our team specializes in taking the raw, expressive power of the 16-bit era 
                  and empowering it with modern physics, immersive narratives, and 
                  high-fidelity performance.
                </p>
              </div>
              <div className="about-visual-block">
                <img src={logoPink} alt="Somiari Icon" className="about-big-logo" />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 02: THE PILLARS (BLOCK STYLE) */}
        <section className="pixel-section-purple">
          <div className="section-content">
            <h2 className="label-formal white">Core Pillars</h2>
            <div className="pillars-grid">
              
              <div className="pillar-item">
                <div className="pillar-icon">01</div>
                <h4>NOSTALGIA</h4>
                <p>Respecting the visual language and "feel" of classic gaming history.</p>
              </div>

              <div className="pillar-item">
                <div className="pillar-icon">02</div>
                <h4>INNOVATION</h4>
                <p>Breaking technical barriers to create mechanics that feel fresh and responsive.</p>
              </div>

              <div className="pillar-item">
                <div className="pillar-icon">03</div>
                <h4>ATMOSPHERE</h4>
                <p>Every pixel and sound frequency is tuned to pull the player into the world.</p>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 03: THE FUTURE */}
        <section className="pixel-section-dark">
          <div className="section-content cta-center">
            <h3 className="display-text small">READY TO PLAY?</h3>
            <p className="body-text">The journey is just beginning. Join our community and follow the development of our future titles.</p>
            <div className="about-actions">
              <Link to="/games" className="pixel-btn-primary">EXPLORE PROJECTS</Link>
              <a href="https://twitter.com/SomiariOfficial" target="_blank" className="pixel-btn-secondary">FOLLOW US</a>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}