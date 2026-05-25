import { Link } from "react-router-dom";
import useExternalStyle from "../hooks/useExternalStyle";
import iconLogo from "../assets/images/logo24.png";

export default function About() {
    useExternalStyle('about.css');

    return (
        <>
            <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

            <div className="ubp-editorial-wrapper dark-theme">
                <nav className="ubp-nav">
                    <div className="nav-container">
                        <Link to="/" className="brand">
                            <img src={iconLogo} alt="Unburied Pixels" />
                        </Link>
                        <div className="nav-links">
                            <Link to="/games">PROJECTS</Link>
                            <Link to="/about" className="active">ABOUT</Link>
                            <Link to="/contact">CONTACT</Link>
                        </div>
                    </div>
                </nav>

                <main className="ubp-main">
                    <header className="page-header">
                        <h1 className="page-title">ABOUT</h1>
                        <h1 className="page-title outline">STUDIO</h1>
                    </header>

                    <section className="mission-grid">
                        <div className="mission-label">MISSION_STATEMENT</div>
                        <div className="mission-content">
                            <p>
                                Unburied Pixels is an independent game studio dedicated to creating 
                                experiences that blend <span className="text-green">retro aesthetics</span> with <span className="text-blue">modern gameplay mechanics</span>. 
                            </p>
                            <p className="secondary-text">
                                We believe that great games don't need millions of dollars — just passion, 
                                creativity, and a relentless drive to push pixels.
                            </p>
                        </div>
                    </section>

                    <section className="team-section">
                        <div className="section-header-bar">
                            <h2>THE_CORE_TEAM</h2>
                            <span className="count">03 MEMBERS</span>
                        </div>

                        <div className="team-grid">
                            <article className="member-card">
                                <div className="member-icon"><i className="fas fa-gamepad"></i></div>
                                <div className="member-info">
                                    <span className="role">DESIGNER // PROGRAMMER</span>
                                    <h3>LUCAS EDUARDO</h3>
                                    <p>Programmer, Creator and Game Designer behind LIGHT.</p>
                                </div>
                            </article>

                            <article className="member-card">
                                <div className="member-icon"><i className="fas fa-headphones"></i></div>
                                <div className="member-info">
                                    <span className="role">SOUND ARCHITECT</span>
                                    <h3>ISABELLA SANCHES</h3>
                                    <p>Sound Design and Music Composition.</p>
                                </div>
                            </article>

                            <article className="member-card">
                                <div className="member-icon"><i className="fas fa-vial"></i></div>
                                <div className="member-info">
                                    <span className="role">QUALITY ASSURANCE</span>
                                    <h3>LUIZ OTÁVIO</h3>
                                    <p>Beta Testing and System Stability.</p>
                                </div>
                            </article>
                        </div>
                    </section>

                    <section className="thanks-section">
                        <div className="thanks-card">
                            <div className="thanks-label">RECOGNITION</div>
                            <div className="thanks-content">
                                <span className="role">SPECIAL THANKS & SUPPORT</span>
                                <h3>HAGRAJAG (ROSE)</h3>
                            </div>
                            <div className="thanks-icon"><i className="fas fa-heart"></i></div>
                        </div>
                    </section>

                    <section className="back-section">
                        <Link to="/" className="back-link">BACK TO HOME</Link>
                    </section>
                </main>

                <footer className="ubp-footer">
                    <div className="footer-bottom">
                        <span>© UNBURIED PIXELS</span>
                        <div className="footer-socials">
                            <a href="https://instagram.com/UnburiedPixels">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://twitter.com/UnburiedPixels">
                                <i className="fab fa-x-twitter"></i>
                            </a>
                            <a href="https://github.com/LuxJson">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}