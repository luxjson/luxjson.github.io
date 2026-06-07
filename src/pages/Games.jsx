import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

// Assets
import InsomniaPlaceholder from '../assets/images/i.png';
import LightPlaceholder from '../assets/images/light-2.png';
import '../assets/styles/games.css';

export default function Games() {


  return (
    <div className="pixel-page">
      <Sidebar />

      <main className="pixel-container">
        {/* HERO GAMES */}
        <header className="pixel-section-purple about-header-spacing">
          <div className="section-content">
            <span className="hero-tag white-tag">Our Universe</span>
            <h1 className="hero-title">MISSIONS &<br/>PROJECTS</h1>
            <p className="hero-description white-text">
              Explore the library of Somiari Studio. From released gems to 
              upcoming nightmares currently under development.
            </p>
          </div>
        </header>

        {/* GAMES LIST - DESIGN INTEGRADO PIXEL-STYLE */}
<section className="pixel-section-dark">
  <div className="section-content">
    <h2 className="label-formal">Active Missions</h2>
    
    <div className="missions-container">
      
      {/* GAME 01: LIGHT */}
      <article className="mission-entry">
        <div className="mission-visual">
          <img src={LightPlaceholder} alt="Light Game" />
          <div className="mission-tag released">RELEASED</div>
        </div>
        <div className="mission-data">
          <div className="mission-header">
            <span className="mission-year">FEBRUARY</span>
            <h3 className="mission-name">LIGHT</h3>
          </div>
          <p className="mission-desc">
            A minimalist journey through illumination and shadow mechanics. 
            Master the light to survive the darkness.
          </p>
          <div className="mission-actions">
            <a 
              href="https://somiari.itch.io/light" 
              target="_blank" 
              rel="noreferrer" 
              className="pixel-btn-primary small"
            >
              PLAY NOW
            </a>
          </div>
        </div>
      </article>

      {/* GAME 02: INSOMNIA */}
      <article className="mission-entry">
        <div className="mission-visual">
          <img src={InsomniaPlaceholder} alt="Insomnia Game" />
          <div className="mission-tag development">DEVELOPMENT</div>
        </div>
        <div className="mission-data">
          <div className="mission-header">
            <span className="mission-year">COMING SOON</span>
            <h3 className="mission-name">INSOMNIA</h3>
          </div>
          <p className="mission-desc">
            The nightmare is just beginning. Experience true atmospheric horror 
            in this psychological thriller.
          </p>
          <div className="mission-actions">
            {/* Botão liberado agora levando para a página do jogo */}
            <Link to="/insomnia" className="pixel-btn-primary small">
              VISIT PAGE
            </Link>
          </div>
        </div>
      </article>

    </div>
  </div>
</section>

        <Footer />
      </main>
    </div>
  );
}