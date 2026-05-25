import { Link } from "react-router-dom";
import useExternalStyle from "../hooks/useExternalStyle";
import iconLogo from "../assets/images/logo24.png";

export default function NotFound() {
    useExternalStyle('notfound.css');

    return (
        <>

        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

        <div className="ubp-editorial-wrapper">
            <nav className="ubp-nav">
                <div className="nav-container">
                    <div className="brand">
                        <Link to="/">
                            <img src={iconLogo} alt="Unburied Pixels" />
                        </Link>
                    </div>
                    <div className="nav-links">
                        <Link to="/games">PROJECTS</Link>
                        <Link to="/about">ABOUT</Link>
                        <Link to="/contact">CONTACT</Link>
                    </div>
                </div>
            </nav>

            <main className="ubp-content">
                <section className="error-section">
                    <div className="hero-header">
                        <h1 className="hero-title">ERROR</h1>
                        <h1 className="hero-title outline">404</h1>
                    </div>

                    <div className="hero-body">
                        <div className="info-cell">
                            <p className="slogan-text">
                                LEVEL <span className="text-red">NOT FOUND</span>. <br/>
                                YOU'VE VENTURED <span className="text-magenta">BEYOND</span> THE GRID.
                            </p>
                            <Link to="/" className="cta-button">
                                RETURN TO BASE
                            </Link>
                        </div>
                        <div className="visual-cell glitch-bg">
                            <div className="pixel-matrix">
                                <div className="p-box red"></div>
                                <div className="p-box dark"></div>
                                <div className="p-box red"></div>
                                <div className="p-box dark"></div>
                                <div className="p-box magenta"></div>
                                <div className="p-box dark"></div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="ubp-marquee error-variant">
                    <div className="marquee-inner">
                        SYSTEM FAILURE • PAGE MISSING • 404 • PIXEL LOST • SYSTEM FAILURE • PAGE MISSING • 404 • PIXEL LOST • SYSTEM FAILURE • PAGE MISSING • 404 • PIXEL LOST •
                    </div>
                </div>
            </main>

            <footer className="ubp-footer">
                <div className="footer-bottom">
                    <span>© UNBURIED PIXELS</span>
                    <span>LOST IN THE MATRIX</span>
                </div>
            </footer>
        </div>

        </>
    );
}