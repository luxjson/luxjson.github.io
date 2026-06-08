import { Link } from "react-router-dom";
import '../assets/styles/footer.css';

export default function Footer() {
    return (
        <footer className="main-footer">
            <div className="footer-card-expanded">
                <div className="footer-top-row">
                    <div className="footer-brand-side">
                        <h2 className="footer-logo-text">SOMIARI</h2>
                        <p className="footer-brand-desc">
                            Crafting high-quality pixel art and innovative <br /> 
                            arcade experiences from Brazil to the world.
                        </p>
                        <Link to="/games" className="footer-download-btn">
                            Explore Games <i className="fas fa-arrow-right"></i>
                        </Link>
                    </div>

                    <div className="footer-links-grid">
                        <div className="footer-column">
                            <span className="column-title fix">FOLLOW US</span>
                            <div className="social-links-minimal">
                                <a href="https://github.com/LuxJson" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                                <a href="https://twitter.com/somiariofficial" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
                                <a href="https://instagram.com/somiariofficial" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>

                        <div className="footer-column">
                            <span className="column-title fix">STUDIO</span>
                            <Link to="/about">About Us</Link>
                            <Link to="/games">Games</Link>
                            <Link to="/contact">Press</Link>
                        </div>

                        <div className="footer-column">
                            <span className="column-title fix">GET HELP</span>
                            <Link to="/contact">Support</Link>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom-bar">
                    <div className="footer-copyright">
                        <span className="fix">© 2026 SOMIARI STUDIO</span>
                        <span className="dot"></span>
                        <span className="fix">ALL RIGHTS RESERVED</span>
                    </div>
                    <div className="footer-made-with">
                        MADE WITH <span className="pink-heart">❤</span> BY THE <span className="text-pink">SOMIARI TEAM</span>
                    </div>
                </div>
            </div>
        </footer>
    ); 
}