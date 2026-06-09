import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import '../assets/styles/luxjson.css';

export default function LuxJson() {
  const [projects, setProjects] = useState([]);
  const [user, setUser] = useState(null);
  
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [status, setStatus] = useState("");
  const form = useRef();

  useEffect(() => {
    fetch('https://api.github.com/users/luxjson')
      .then(res => res.json()).then(data => setUser(data));

    fetch('https://api.github.com/users/luxjson/repos?per_page=100&sort=pushed')
      .then(res => res.json()).then(data => {
        const targets = ['analisai-express', 'react', 'light', 'insomnia', 'SENAI-MaryCario'];
        const blacklist = ['lightoldwebsite'];
        const filtered = data.filter(repo => 
          targets.some(t => repo.name.toLowerCase().includes(t)) &&
          !blacklist.some(b => repo.name.toLowerCase() === b)
        );
        setProjects(filtered);
      });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("SENDING...");
    emailjs.sendForm('service_2agyezv', 'template_keoux04', form.current, '-7mi-fOFqFgasG8qS')
      .then(() => {
        setStatus("SENT SUCCESSFULLY.");
        setTimeout(() => {
          setIsChatOpen(false);
          setStatus("");
          form.current.reset();
        }, 2000);
      }, () => setStatus("ERROR. TRY AGAIN."));
  };

  const renderMixedText = (text) => {
    if (!text) return "";
    const parts = text.toUpperCase().split(/(\d+)/);
    return parts.map((part, i) => 
      /\d+/.test(part) ? <span key={i} className="fix">{part}</span> : part
    );
  };

  return (
    <div className="sohub-root selection:bg-black selection:text-white">
      <header className="sh-header">
        <div className="sh-nav-pill">
          <Link to="#home" className="sh-logo-nav">LUXJSON</Link>
          <div className="sh-nav-links">
             <Link to="#work">WORK</Link>
             <button onClick={() => setIsChatOpen(true)} className="sh-chat-btn" style={{border:'none', cursor:'pointer'}}>
                <span>LET'S CHAT</span>
                <div className="sh-circle-icon"><i className="material-icons">mail</i></div>
             </button>
          </div>
        </div>
      </header>

      <main id="main-content">
        <section id="home" className="sh-hero">
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
             <div className="sh-hero-render">
                <span className="material-icons sh-float-icon">polymer</span>
             </div>
          </div>
        </section>

        <section id="work" className="sh-work">
          <div className="sh-container">
            <span className="sh-section-tag fix">WORK</span>
            <h2 className="sh-description-text">
              I AM A JUNIOR <span className="sh-h-word">WEB DEVELOPER</span>, PASSIONATE ABOUT TURNING IDEAS INTO REALITIES.
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
                  <div className="sh-project-image-wrap" style={{ backgroundImage: `url(https://opengraph.githubassets.com/1/luxjson/${repo.name})` }}>
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

        <section className="sh-services fundo-escuro">
          <div className="sh-container">
            <div className="sh-service-card">
               <h2 className="sh-service-title">
                  SMART <br />
                  <span className="text-grey">DEVELOPMENT</span>
               </h2>
               <p className="sh-service-desc">
                 Specialized in Building High-Performance Systems and Digital Experiences That Surpass Expectations.
               </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="sh-footer">
        <div className="sh-footer-bg-text">{renderMixedText("LUXJSON")}</div>
        <div className="sh-footer-main fundo-escuro">
           <h2 className="sh-footer-title">© LUXJSON</h2>
           <span className="sh-footer-sub fix">YOUR VISION BUILDS OUR HISTORY</span>
           <div className="sh-footer-socials">
              <a href="https://github.com/luxjson" target="_blank" className="sh-social-link"><i className="fab fa-github"></i></a>
              <a href="https://instagram.com/luxjson" target="_blank" className="sh-social-link"><i className="fab fa-instagram"></i></a>
              <a href="https://linkedin.com/in/luxjson" target="_blank" className="sh-social-link"><i className="fab fa-linkedin"></i></a>
                <button onClick={() => setIsInfoOpen(true)} className="sh-social-link" style={{ background: '#1e232c', border: 'none', cursor: 'pointer' }}>
                  <i className="material-icons">info</i>
                </button>
           </div>
        </div>
      </footer>

      <AnimatePresence>
        {isChatOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsChatOpen(false)}
              className="sh-modal-overlay"
            />
            <motion.div 
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="sh-chat-modal"
            >
              <div className="sh-modal-header">
                <h2 className="asgard">GET IN TOUCH</h2>
                <button onClick={() => setIsChatOpen(false)} className="sh-close-btn">
                  <i className="material-icons">close</i>
                </button>
              </div>

              <form ref={form} onSubmit={sendEmail} className="sh-modal-form">
                <div className="sh-input-group">
                  <label className="fix">NAME</label>
                  <input type="text" name="user_name" placeholder="Your name" required />
                </div>
                <div className="sh-input-group">
                  <label className="fix">EMAIL</label>
                  <input type="email" name="user_email" placeholder="your@email.com" required />
                </div>
                <div className="sh-input-group">
                  <label className="fix">SUBJECT</label>
                  <input type="text" name="subject" placeholder="What is this about?" required />
                </div>
                <div className="sh-input-group">
                  <label className="fix">MESSAGE</label>
                  <textarea name="message" placeholder="Your message..." rows="5" required></textarea>
                </div>

                <div className="sh-modal-footer">
                  <button type="submit" className="sh-submit-pill">
                    <span>{status || "SEND MESSAGE"}</span>
                    <div className="sh-circle-icon"><i className="material-icons">arrow_forward</i></div>
                  </button>
                </div>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      
      <AnimatePresence>
        {isInfoOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsInfoOpen(false)}
              className="sh-modal-overlay"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="sh-info-drawer-simple"
            >
              <div className="sh-info-drawer-header">
                <h2>INFO</h2>
                <button onClick={() => setIsInfoOpen(false)} className="sh-close-btn">
                  <i className="material-icons">close</i>
                </button>
              </div>
              <div className="sh-info-drawer-body-simple">
                <div className="sh-simple-version">
                  <span className="sh-simple-badge">v1.000001</span>
                </div>
                <div className="sh-simple-heart">
                  Made by luxjson
                </div>
              </div>
              <div className="sh-drawer-buttons">
                  <a
                    href="https://github.com/luxjson/luxjson.github.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sh-drawer-btn"
                  >
                    <i className="fab fa-github"></i> View website repository
                  </a>
                  <a
                    href="https://somiaristudio.github.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sh-drawer-btn"
                  >
                    <i className="material-icons">public</i> SOMIARI Website
                  </a>
                </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}