import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import '../assets/styles/games.css';
import Header from "../components/Header";
import Footer from "../components/Footer";

import InsomniaPlaceholder from '../assets/images/i.png';
import LightPlaceholder from '../assets/images/The_light.jpg';
import Screen1 from '../assets/images/screen1.png';
import Screen2 from '../assets/images/screen2.png';

import Screen1Insomnia from '../assets/images/1.png';
import Screen2Insomnia from '../assets/images/2.png';
import Screen3Insomnia from '../assets/images/3.png';

const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3 }
  }
};

const itemVariants = {
  initial: { opacity: 0, y: 40, scale: 0.96 },
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

export default function Games() {
  const gameList = [
    {
      id: "01",
      title: "INSOMNIA",
      status: "IN DEVELOPMENT",
      description: "A deep dive into atmospheric horror and psychological tension. Experience a mystery that tells the story of a lost world where your mind is your greatest enemy.",
      images: [InsomniaPlaceholder, Screen1Insomnia, Screen2Insomnia, Screen3Insomnia],
      tag: "PSYCHOLOGY HORROR"
    },
    {
      id: "02",
      title: "LIGHT",
      status: "RELEASED",
      description: "Immerse yourself in a mystery that tells the story of a lost world. Discover the secrets hidden within the shadows and guide your way through the darkness.",
      images: [LightPlaceholder, Screen1, Screen2],
      tag: "HORROR"
    }
  ];

  return (
    <motion.div 
      className="material-wrapper"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Header />
      
      <main className="games-container">
        <motion.header variants={itemVariants} className="page-header">
          <div className="badge">GALLERY · PROJECTS</div>
          <h1 className="hero-title">OUR <span className="text-pink">GAMES.</span></h1>
        </motion.header>

        <section className="games-list">
          {gameList.map((game) => (
            <motion.div 
              key={game.id} 
              variants={itemVariants}
              className="game-card-horizontal"
            >
              <div className="game-visual-side">
                <div className="carousel-snap">
                  {game.images.map((img, idx) => (
                    <img key={idx} src={img} alt={game.title} className="snap-img" />
                  ))}
                </div>
                <div className="status-label fix">{game.status}</div>
                <div className="scroll-indicator"><i className="fas fa-arrow-right"></i></div>
              </div>

              <div className="game-info-side">
                <div className="info-header">
                  <span className="game-tag fix">{game.tag}</span>
                  <span className="game-number fix">#{game.id}</span>
                </div>
                
                <h2 className="game-name">{game.title}</h2>
                <p className="game-desc">{game.description}</p>
                
                <div className="action-area">
                  {game.title === "INSOMNIA" ? (
                    <Link to="/insomnia" className="action-button">VIEW PROJECT</Link>
                  ) : (
                    <a href={`https://somiari.itch.io/${game.title}`} target="_blank" rel="noreferrer" className="action-button">STORE PAGE</a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </section>
      </main>

      <Footer />
    </motion.div>
  );
}