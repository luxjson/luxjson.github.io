import { Link } from "react-router-dom";
import useExternalStyle from "../hooks/useExternalStyle";
import iconLogo from "../assets/images/logo24.png";

export default function Games() {
    useExternalStyle('games.css');

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
                            <Link to="/games" className="active">PROJECTS</Link>
                            <Link to="/about">ABOUT</Link>
                            <Link to="/contact">CONTACT</Link>
                        </div>
                    </div>
                </nav>
                
                <main className="ubp-main">
                    <header className="page-header">
                        <h1 className="page-title">OUR</h1>
                        <h1 className="page-title outline">RELEASES</h1>
                    </header>

                    <section className="games-list">
                        
                        <article className="game-entry">
                            <div className="game-visual">
                                <div className="game-img-wrapper img-insomnia">
                                </div>
                            </div>
                            <div className="game-details">
                                <div className="detail-header">
                                    <span className="game-index">01</span>
                                    <h2 className="game-name">INSOMNIA</h2>
                                    <span className="game-tag">NARRATIVE ADVENTURE</span>
                                </div>
                                
                                <p className="game-desc">
                                    In a world where the clock never moves, silence is your only companion. 
                                    Experience a surreal journey through the subconscious.
                                </p>

                                <div className="game-metadata">
                                    <div className="meta-item"><span>TYPE</span> 5 HOURS</div>
                                    <div className="meta-item"><span>SYSTEM</span> MULTIPLE ENDINGS</div>
                                    <div className="meta-item"><span>AESTHETIC</span> OMORI STYLE</div>
                                </div>

                                <Link to="/games/insomnia" className="game-action-btn enabled">
                                    COMING SOON
                                </Link>
                            </div>
                        </article>

                        <article className="game-entry invert">
                            <div className="game-details">
                                <div className="detail-header">
                                    <span className="game-index">02</span>
                                    <h2 className="game-name">LIGHT</h2>
                                    <span className="game-tag">ACTION · SURVIVAL</span>
                                </div>
                                
                                <p className="game-desc">
                                    You are Operator 07, the last sentinel in an isolated relay bunker. 
                                    Fight against the Fade to keep the generator alive and uncover corporate secrets.
                                </p>

                                <div className="game-metadata">
                                    <div className="meta-item"><span>FEAT</span> ATMOSPHERIC</div>
                                    <div className="meta-item"><span>FEAT</span> STORY-RICH</div>
                                    <div className="meta-item"><span>FEAT</span> CORPORATE MYSTERY</div>
                                </div>

                                <a href="https://UnburiedPixels.itch.io/light" target="_blank" rel="noreferrer" className="game-action-btn">
                                    AVAILABLE NOW
                                </a>
                            </div>
                            <div className="game-visual">
                                <div className="game-img-wrapper img-light">
                                </div>
                            </div>
                        </article>

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