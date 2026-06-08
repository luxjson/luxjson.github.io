import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import '../assets/styles/home.css';
import Header from "../components/Header";
import Footer from "../components/Footer";
import icon from '../assets/images/icon-pink.png';

const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.3 }
  }
};

const itemVariants = {
  initial: { opacity: 0, y: 40, scale: 0.98 },
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

export default function Home() {
  return (
    <motion.div 
      className="material-wrapper"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Header />
      
      <main className="hero-container">
        <motion.section variants={itemVariants} className="hero-text">
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
              <a href="https://instagram.com/somiariofficial" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="https://twitter.com/somiariofficial" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
        </motion.section>

        <motion.section variants={itemVariants} className="hero-visual">
          <div className="mascot-surface">
            <motion.img 
              src={icon} 
              alt="Mascot" 
              className="mascot-img" 
              animate={{ y: [0, -20, 0] }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
          </div>
        </motion.section>
      </main>

      <Footer />
    </motion.div>
  );
}