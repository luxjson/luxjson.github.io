import { Link } from "react-router-dom";
import logoDeitado from "../assets/images/logo-deitado-pink.png";
import '../assets/styles/home.css';

export default function Footer() {
    return (
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
              <a href="https://somiari.itch.io/light" target="_blank">LIGHT</a>
              <Link to="/insomnia">INSOMNIA</Link>
            </div>

            <div className="footer-links-col">
              <h5>COMMUNITY</h5>
              <a href="https://twitter.com/SomiariOfficial" target="_blank">Twitter</a>
              <a href="https://instagram.com/SomiariOfficial" target="_blank">Instagram</a>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="footer-legal">
              <span>© Somiari Studio</span>
              <Link to="#">Privacy Policy</Link>
              <Link to="#">Terms of Service</Link>
            </div>
            <div className="footer-social">
              <a href="https://x.com/SomiariOfficial" target="_blank" style={{textDecoration: 'none' , color: 'white'}}>
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://github.com/LuxJson" target="_blank" style={{textDecoration: 'none' , color: 'white'}}>
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.instagram.com/SomiariOfficial" target="_blank" style={{textDecoration: 'none' , color: 'white'}}>
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </footer>
    );
}