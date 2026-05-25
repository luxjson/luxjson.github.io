import { Link } from "react-router-dom";
import useExternalStyle from "../hooks/useExternalStyle";
import iconLogo from "../assets/images/logo24.png";
import { useState } from "react";
export default function Contact() {
    useExternalStyle('contact.css');

    const [showEmailPopup, setShowEmailPopup] = useState(false);

    const handleEmailClick = (e) => {
        e.preventDefault();
        setShowEmailPopup(true);
    };

    const closePopup = () => {
        setShowEmailPopup(false);
    };

    const copyEmail = () => {
        navigator.clipboard.writeText('contatosadberry@gmail.com');
        alert('Email copied to clipboard!');
    };

    const openEmailClient = () => {
        window.location.href = 'mailto:contatosadberry@gmail.com';
        closePopup();
    };

    return (
        <>
            <div className="ubp-editorial-wrapper dark-theme">
                <nav className="ubp-nav">
                    <div className="nav-container">
                        <Link to="/" className="brand">
                            <img src={iconLogo} alt="Unburied Pixels" />
                        </Link>
                        <div className="nav-links">
                            <Link to="/games">PROJECTS</Link>
                            <Link to="/about">ABOUT</Link>
                            <Link to="/contact" className="active">CONTACT</Link>
                        </div>
                    </div>
                </nav>

                <main className="ubp-main">
                    <header className="page-header">
                        <h1 className="page-title">GET IN</h1>
                        <h1 className="page-title outline">TOUCH</h1>
                    </header>

                    <section className="contact-list">
                        
                        <a href="#" onClick={handleEmailClick} className="contact-row">
                            <div className="row-label">DIRECT_CHANNEL</div>
                            <div className="row-content">
                                <span className="contact-type">EMAIL</span>
                                <span className="contact-val">contatosadberry@gmail.com</span>
                            </div>
                            <div className="row-arrow">↗</div>
                        </a>

                        <a href="https://www.instagram.com/UnburiedPixels" target="_blank" rel="noreferrer" className="contact-row">
                            <div className="row-label">SOCIAL_LINK</div>
                            <div className="row-content">
                                <span className="contact-type">INSTAGRAM</span>
                                <span className="contact-val">@UnburiedPixels</span>
                            </div>
                            <div className="row-arrow">↗</div>
                        </a>

                        <a href="https://github.com/LuxJson" target="_blank" rel="noreferrer" className="contact-row">
                            <div className="row-label">SOURCE_CODE</div>
                            <div className="row-content">
                                <span className="contact-type">GITHUB</span>
                                <span className="contact-val">/LuxJson</span>
                            </div>
                            <div className="row-arrow">↗</div>
                        </a>

                        <a href="https://UnburiedPixels.itch.io/" target="_blank" rel="noreferrer" className="contact-row">
                            <div className="row-label">GAMES_STORE</div>
                            <div className="row-content">
                                <span className="contact-type">ITCH.IO</span>
                                <span className="contact-val">UnburiedPixels.itch.io</span>
                            </div>
                            <div className="row-arrow">↗</div>
                        </a>
                    </section>

                    <section className="back-section">
                        <Link to="/" className="back-link">BACK TO HOME</Link>
                    </section>
                </main>
                
                {showEmailPopup && (
                    <div className="om-popup-overlay" onClick={closePopup}>
                        <div className="om-popup" onClick={(e) => e.stopPropagation()}>
                            <div className="popup-header">
                                <span className="popup-tag">SYSTEM_MSG</span>
                                <button className="close-btn" onClick={closePopup}>[ CLOSE ]</button>
                            </div>
                            <div className="popup-body">
                                <h3 className="popup-title">CONTACT_INITIATED</h3>
                                <p className="popup-email-text">contatosadberry@gmail.com</p>
                                <div className="popup-actions">
                                    <button onClick={openEmailClient} className="om-btn-fill">OPEN CLIENT</button>
                                    <button onClick={copyEmail} className="om-btn-outline">COPY ADDRESS</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <footer className="ubp-footer">
                    <div className="footer-bottom">
                        <span>© UNBURIED PIXELS</span>
                        <div className="footer-socials">
                            <a href="https://youtube.com/@UnburiedPixels">
                                <i className="fab fa-youtube"></i>
                            </a>
                            <a href="https://twitter.com/UnburiedPixels">
                                <i className="fab fa-x-twitter"></i>
                            </a>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}