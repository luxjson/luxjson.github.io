import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../assets/styles/luxjson.css';

export default function LuxJson() {
  const [projects, setProjects] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users/luxjson')
      .then(res => res.json()).then(data => setUser(data));

    fetch('https://api.github.com/users/luxjson/repos?per_page=100&sort=pushed')
      .then(res => res.json()).then(data => {
        const targets = ['analisai-express', 'react', 'light', 'insomnia'];
        const blacklist = ['lightoldwebsite'];
        const filtered = data.filter(repo => 
          targets.some(t => repo.name.toLowerCase().includes(t)) &&
          !blacklist.some(b => repo.name.toLowerCase() === b)
        );
        setProjects(filtered);
      });
  }, []);

  const renderMixedText = (text) => {
    if (!text) return "";
    const parts = text.toUpperCase().split(/(\d+)/);
    return parts.map((part, i) => 
      /\d+/.test(part) ? <span key={i} className="fix">{part}</span> : part
    );
  };

  return (
    <div className="sohub-root selection:bg-black selection:text-white">
      {/* FLOATING HEADER PILL */}
      <header className="sh-header">
        <div className="sh-nav-pill">
          <span className="sh-logo-nav">LUXJSON</span>
          <div className="sh-nav-links">
             <a href="#work">WORK</a>
             <a href="mailto:lucaseduarte60gmail.com" className="sh-chat-btn">
                <span>LET'S CHAT</span>
                <div className="sh-circle-icon"><i className="material-icons">mail</i></div>
             </a>
          </div>
        </div>
      </header>

      <main id="main-content">
        {/* HERO SECTION */}
        <section className="sh-hero">
          <div className="sh-hero-container">
             <div className="sh-hero-text">
                <motion.h1 
                  initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  className="sh-giant-title"
                >
                  {renderMixedText("LUXJSON")}
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                  className="sh-hero-sub fix"
                >
                  YOUR VISION BUILDS OUR HISTORY.
                </motion.p>
             </div>
             {/* ELEMENTO 3D FLUTUANTE */}
             <div className="sh-hero-render">
                <span className="material-icons sh-float-icon">polymer</span>
             </div>
          </div>
        </section>

        {/* WORK SECTION */}
        <section id="work" className="sh-work">
          <div className="sh-container">
            <span className="sh-section-tag fix">WORK</span>
            <h2 className="sh-description-text">
              WE ARE A <span className="sh-h-word">DILIGENT</span> TEAM, PASSIONATE ABOUT TURNING IDEAS INTO REALITIES.
            </h2>

            <div className="sh-projects-grid">
              {projects.map((repo, i) => (
                <motion.a 
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  className="sh-project-card group"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="sh-project-image-wrap">
                    <div className="sh-project-overlay">
                       <div className="sh-project-title">
                          <span className="sh-arrow"><i className="material-icons">arrow_forward</i></span>
                          <h3>{renderMixedText(repo.name.replace(/-/g, ' '))}</h3>
                       </div>
                    </div>
                    <div className="sh-placeholder-img"></div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE / SERVICE CARD */}
        <section className="sh-services">
          <div className="sh-container">
            <div className="sh-service-card">
               <h2 className="sh-service-title">
                  SMART <br />
                  <span className="text-grey">DEVELOPMENT</span>
               </h2>
               <p className="sh-service-desc">
                 Specialized in building high-performance systems and digital experiences 
                 that surpass expectations.
               </p>
               <div className="sh-tags">
                  <span className="fix">SYSTEM_ARCHITECT</span>
                  <span className="fix">PIXEL_PERFECT</span>
               </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER LAYERED */}
      <footer className="sh-footer">
        <div className="sh-footer-bg-text">{renderMixedText("LUXJSON")}</div>
        <div className="sh-footer-main">
           <h2 className="sh-footer-title">© LUXJSON DIGITAL</h2>
           <span className="sh-footer-sub fix">AWARD-WINNING ENGINEER</span>
           <div className="sh-footer-socials">
              <a href="https://github.com/luxjson" className="sh-social-link"><i className="fab fa-github"></i></a>
              <a href="https://twitter.com" className="sh-social-link"><i className="fab fa-twitter"></i></a>
           </div>
        </div>
      </footer>
    </div>
  );
}