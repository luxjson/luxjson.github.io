import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import '../assets/styles/contact.css';
import Header from "../components/Header";
import Footer from "../components/Footer";

const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.3 }
  }
};

const itemVariants = {
  initial: { opacity: 0, y: 30, scale: 0.98 },
  animate: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      duration: 0.8, 
      ease: [0.16, 1, 0.3, 1] 
    } 
  }
};

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("SENDING...");
    emailjs.sendForm(
      'service_yygpjxx', 
      'template_tsjfeie', 
      form.current, 
      '-7mi-fOFqFgasG8qS'
    )
    .then((result) => {
        setStatus("MESSAGE SENT!");
        form.current.reset();
        setTimeout(() => setStatus(""), 5000);
    }, (error) => {
        setStatus("ERROR. TRY AGAIN.");
    });
  };

  return (
    <motion.div 
      className="material-wrapper"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Header />
      
      <main className="contact-container">
        <motion.header variants={itemVariants} className="page-header">
          <div className="badge">COMMUNICATIONS · CONNECT</div>
          <h1 className="hero-title">TALK TO <span className="text-pink">US.</span></h1>
        </motion.header>

        <section className="contact-grid">
          <motion.div variants={itemVariants} className="gmail-card">
            <div className="gmail-header">
              <span className="fix">NEW MESSAGE</span>
              <div className="window-dots">
                <span></span><span></span><span></span>
              </div>
            </div>
            
            <form ref={form} onSubmit={sendEmail} className="gmail-body">
              <div className="gmail-input-row">
                <label className="fix">TO:</label>
                <input type="text" value="HELLO@SOMIARISTUDIO.COM" readOnly className="readonly-input" />
              </div>
              
              <div className="gmail-input-row">
                <label className="fix">FROM:</label>
                <input type="email" name="user_email" placeholder="your@email.com" required />
              </div>

              <div className="gmail-input-row">
                <label className="fix">SUBJECT:</label>
                <input type="text" name="subject" placeholder="Project Inquiry" required />
              </div>

              <textarea name="message" placeholder="Write your message here..." className="gmail-textarea" required></textarea>

              <div className="gmail-footer-bar">
                <button type="submit" className="gmail-send-btn">
                  SEND MESSAGE
                </button>
                
                {status && <span className="status-msg fix">{status}</span>}

                <div className="gmail-icons">
                  <i className="fas fa-paperclip"></i>
                  <i className="fas fa-image"></i>
                  <i className="fas fa-link"></i>
                  <i className="fas fa-trash-alt"></i>
                </div>
              </div>
            </form>
          </motion.div>

          <motion.aside variants={itemVariants} className="contact-info-side">
            <div className="info-pill pink-pill">
              <h3 className="card-title">SOCIAL MEDIA</h3>
              <div className="social-list">
                <a href="https://github.com/LuxJson" target="_blank" rel="noreferrer"><i className="fab fa-github"></i> GITHUB</a>
                <a href="https://twitter.com/somiariofficial" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i> TWITTER</a>
                <a href="https://instagram.com/somiariofficial" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i> INSTAGRAM</a>
              </div>
            </div>

            <div className="info-pill">
              <h3 className="card-title">LOCATION</h3>
              <p className="card-text fix">SÃO PAULO / BRAZIL, BR</p>
            </div>
          </motion.aside>
        </section>
      </main>

      <Footer />
    </motion.div>
  );
}