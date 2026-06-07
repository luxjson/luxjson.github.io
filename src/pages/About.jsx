import '../assets/styles/about.css';
import Header from "../components/Header";
import Footer from "../components/Footer";
import icon from '../assets/images/icon-pink.png';

export default function About() {
  return (
    <div className="material-wrapper">
      <Header />
      
      <main className="studio-container">
        <section className="studio-hero">
          <div className="badge">ABOUT US · THE STUDIO</div>
          <h1 className="hero-title">WE ARE <br /> <span className="text-pink">SOMIARI.</span></h1>
          <p className="hero-description">
            BORN IN <span className="fix" style={{ fontWeight: "bold" }}>2025</span>, SOMIARI IS A BRAZILIAN INDIE STUDIO DEDICATED TO CRAFTING 
            EXPERIENCES THAT BLEND NOSTALGIC ARCADE VIBES WITH BOLD MODERN DESIGN.
          </p>
        </section>

        <section className="studio-grid">
          <div className="info-card">
            <h2 className="card-title">OUR MISSION</h2>
            <p className="card-text">
              TO REIMAGINE THE GOLDEN ERA OF GAMES THROUGH A CONTEMPORARY LENS, 
              FOCUSING ON POLISHED MECHANICS AND STRIKING VISUALS.
            </p>
          </div>

          <div className="info-card pink-border">
            <h2 className="card-title">BRAZILIAN SOUL</h2>
            <p className="card-text">
              BASED IN BRAZIL, WE LEVERAGE LOCAL TALENT AND GLOBAL INSPIRATION 
              TO CREATE UNIVERSAL STORIES FOR ALL KINDS OF PLAYERS.
            </p>
          </div>
        </section>

        <section className="mascot-spotlight">
          <div className="spotlight-card">
            <div className="spotlight-text">
              <h2 className="card-title">THE FACE OF THE STUDIO</h2>
              <p className="card-text">
                OUR MASCOT REPRESENTS OUR PHILOSOPHY: CHARISMATIC, CURIOUS, 
                AND ALWAYS READY FOR THE NEXT ADVENTURE.
              </p>
            </div>
            <div className="spotlight-visual">
              <img src={icon} alt="Mascot" className="small-mascot" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}