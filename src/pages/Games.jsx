import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

// Assets
import logoDeitado from "../assets/images/logo-deitado-pink.png";
import logoWhite from "../assets/images/logo-white.png";
import iconPink from "../assets/images/icon-pink.png";
import InsomniaPlaceholder from '../assets/images/i.png';
import LightPlaceholder from '../assets/images/light-2.png';
import '../assets/styles/games.css';

export default function Games() {

  return (
    <div className="pixel-page">
      <Sidebar />

      <main className="pixel-container">
        {/* HERO GAMES */}
        <section className="games-hero">
          <div className="hero-content">
            <span className="hero-tag">OUR UNIVERSE</span>
            <h1 className="hero-title">MISSIONS &<br/>PROJECTS</h1>
            <p className="hero-description">
              Explore the library of Somiari Studio. From released gems to 
              upcoming nightmares currently under development.
            </p>
          </div>
        </section>

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

        {/* FOOTER (Consistente com a Home) */}
        <footer className="zen-footer">
          <div className="footer-grid">
            <div className="footer-brand-col">
              <img src={logoDeitado} alt="Somiari" className="footer-logo" />
              <p className="footer-slogan">Experience the retro-modern future.</p>
            </div>
            
            <div className="footer-links-col">
              <h5>STUDIO</h5>
              <Link to="/about">About Us</Link>
              <Link to="/games">Our Games</Link>
              <Link to="/contact">Contact</Link>
            </div>

            <div className="footer-links-col">
              <h5>GAMES</h5>
              <a href="https://somiari.itch.io/light">LIGHT</a>
              <Link to="/insomnia">INSOMNIA</Link>
            </div>

            <div className="footer-links-col">
              <h5>COMMUNITY</h5>
              <a href="https://twitter.com/SomiariOfficial">Twitter</a>
              <a href="https://instagram/SomiariOfficial">Instagram</a>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="footer-legal">
              <span>© Somiari Studio</span>
              <Link to="#">Privacy Policy</Link>
              <Link to="#">Terms of Service</Link>
            </div>
            <div className="footer-social">
              <a href="https://x.com/SomiariOfficial" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://github.com/LuxJson" className="social-icon">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.instagram.com/SomiariOfficial" className="social-icon">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}