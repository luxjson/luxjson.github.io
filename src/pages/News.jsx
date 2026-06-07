import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

// Importação dos estilos
import "../assets/styles/home.css";
import "../assets/styles/news.css";

// Assets
import LightImg from '../assets/images/light-2.png';
import InsomniaImg from '../assets/images/i.png';

export default function News() {
  return (
    <div className="pixel-page">
      <Sidebar />

      <main className="pixel-container">
        {/* HERO NEWS */}
        <header className="pixel-section-purple about-header-spacing">
          <div className="section-content">
            <span className="hero-tag white-tag">Development Blog</span>
            <h1 className="hero-title">STUDIO UPDATES &<br/>PATCH NOTES</h1>
            <p className="hero-description white-text">
              Follow the journey of our projects. From initial concepts to 
              final performance optimizations.
            </p>
          </div>
        </header>

        {/* NEWS FEED */}
        <section className="pixel-section-dark">
          <div className="section-content">
            <h2 className="label-formal">Latest Briefings</h2>
            
            <div className="news-feed">
              
              {/* POST 1: INSOMNIA DEVLOG */}
              <article className="news-post">
                <div className="post-date">
                  <span className="day" style={{ fontFamily: 'arial', fontWeight: 'bold' }}>05</span>
                  <span className="month">JUN</span>
                </div>
                <div className="post-visual">
                  <img src={InsomniaImg} alt="Insomnia Devlog" />
                </div>
                <div className="post-body">
                  <span className="post-category">Devlog</span>
                  <h3>Insomnia: Crafting the Atmosphere</h3>
                  <p>A deep dive into how we are using dynamic lighting to build a sense of dread in our upcoming psychological thriller.</p>
                  <a href="https://somiari.itch.io/insomnia/devlog/1509454/v002a-refining-the-experience" target="_blank" className="pixel-btn-small">Read More</a>
                </div>
              </article>

              {/* POST 2: LIGHT PATCH */}
              <article className="news-post">
                <div className="post-date">
                  <span className="day" style={{ fontFamily: 'arial', fontWeight: 'bold' }}>07</span>
                  <span className="month">APR</span>
                </div>
                <div className="post-visual">
                  <img src={LightImg} alt="Light Patch" />
                </div>
                <div className="post-body">
                  <span className="post-category">Update</span>
                  <h3>LIGHT: Version <span style={{ fontFamily: 'arial', fontWeight: 'bold' }}>1.03</span> Patch Notes</h3>
                  <p>Performance optimizations for older hardware and fix for the level 4 shadow glitch are now live.</p>
                  <a href="https://github.com/luxjson/LIGHT/releases/tag/V1.03" target="_blank" className="pixel-btn-small">Read More</a>
                </div>
              </article>

              {/* POST 3: STUDIO NEWS */}
              <article className="news-post">
                <div className="post-date">
                  <span className="day" style={{ fontFamily: 'arial', fontWeight: 'bold' }}>10</span>
                  <span className="month">MAY</span>
                </div>
                <div className="post-body no-img">
                  <span className="post-category">Studio</span>
                  <h3>Somiari Studio Expands the Team</h3>
                  <p>We are excited to welcome two new technical artists to the core team to accelerate the development of Insomnia.</p>
                  <Link to="/about" className="pixel-btn-small">Read More</Link>
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