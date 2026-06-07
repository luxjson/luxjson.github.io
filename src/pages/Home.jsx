import { Link } from "react-router-dom";
import '../assets/styles/home.css';
import Header from "../components/Header";
import Footer from "../components/Footer";
import icon from '../assets/images/icon-pink.png';

export default function Home() {
  return (
    <div className="material-wrapper">
      <Header />
      <main className="hero-container">
        <section className="hero-text">
          <div className="badge">INDIE STUDIO · BRAZIL</div>
          <h1 className="hero-title">
            WE CRAFT <br /> 
            <span className="text-pink">MODERN ARCADE</span> <br /> 
            EXPERIENCES.
          </h1>
          <p className="hero-description">
            SOMIARI IS AN INDEPENDENT GAME STUDIO FOCUSED ON HIGH-QUALITY PIXEL ART AND INNOVATIVE GAMEPLAY.
          </p>
          <div className="hero-btns">
            <Link to="/games" className="btn-primary" style={{ textDecoration:"none" }}>EXPLORE PROJECTS</Link>
            <div className="social-capsule">
              <a href="https://instagram.com/somiariofficial" target="_blank"><i className="fab fa-instagram"></i></a>
              <a href="https://twitter.com/somiariofficial" target="_blank"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
        </section>

        <section className="hero-visual">
          <div className="mascot-surface">
            <img src={icon} alt="Mascot" className="mascot-img" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};