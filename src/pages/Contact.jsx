import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

// Importação dos estilos
import "../assets/styles/home.css";
import "../assets/styles/contact.css";

// Assets
import iconPink from "../assets/images/icon-white.png";

export default function Contact() {
  return (
    <div className="pixel-page">
      <Sidebar />

      <main className="pixel-container">
        {/* HERO CONTACT */}
        <header className="pixel-section-purple contact-header-spacing">
          <div className="section-content">
            <span className="hero-tag white-tag">Communication Hub</span>
            <h1 className="hero-title">GET IN TOUCH<br/>WITH THE STUDIO</h1>
            <p className="hero-description white-text">
              Whether you are a player, a developer, or a partner, 
              our frequencies are always open for high-fidelity dialogue.
            </p>
          </div>
        </header>

        {/* CONTACT METHODS GRID */}
        <section className="pixel-section-dark">
          <div className="section-content">
            <h2 className="label-formal">Direct Channels</h2>
            
            <div className="contact-main-grid">
              
              {/* EMAIL BLOCK */}
              <div className="contact-card link-card">
                <div className="contact-icon-box">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-info">
                  <h4>BUSINESS EMAIL</h4>
                  <p>For inquiries, partnerships, and press requests.</p>
                  <a href="mailto:contatosadberry@gmail.com" className="contact-link">hello@somiari.com</a>
                </div>
              </div>

              {/* TWITTER BLOCK */}
              <a href="https://twitter.com/SomiariOfficial" target="_blank" rel="noreferrer" className="contact-card link-card">
                <div className="contact-icon-box">
                  <i className="fab fa-twitter"></i>
                </div>
                <div className="contact-info">
                  <h4>TWITTER / X</h4>
                  <p>Follow us for daily updates and studio news.</p>
                  <span className="contact-handle">@SomiariOfficial</span>
                </div>
              </a>

              {/* INSTAGRAM BLOCK */}
              <a href="https://instagram.com/SomiariOfficial" target="_blank" rel="noreferrer" className="contact-card link-card">
                <div className="contact-icon-box">
                  <i className="fab fa-instagram"></i>
                </div>
                <div className="contact-info">
                  <h4>INSTAGRAM</h4>
                  <p>Behind the scenes and visual art gallery.</p>
                  <span className="contact-handle">@SomiariOfficial</span>
                </div>
              </a>

            </div>
          </div>
        </section>

        {/* SECONDARY INFO */}
        <section className="pixel-section-purple" style={{padding: "60px 80px"}}>
          <div className="section-content contact-footer-cta">
            <img src={iconPink} alt="Somiari" className="contact-mini-logo" />
            <h3 className="display-text small">BASED IN THE DIGITAL VOID</h3>
            <p className="body-text">We operate globally, collaborating with talent from all over the world to build the future of retro gaming.</p>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}