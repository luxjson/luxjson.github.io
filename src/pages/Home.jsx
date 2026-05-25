import { Link } from "react-router-dom";
import useExternalStyle from "../hooks/useExternalStyle";
import iconLogo from "../assets/images/logo24.png";

export default function Home() {
    useExternalStyle('home.css');

    return (
        <>
            <div className="ubp-editorial-wrapper">
                <nav className="ubp-nav">
                    <div className="nav-container">
                        <div className="brand">
                            <img src={iconLogo} alt="Unburied Pixels" />
                        </div>
                        <div className="nav-links">
                            <Link to="/games">PROJECTS</Link>
                            <Link to="/about">ABOUT</Link>
                            <Link to="/contact">CONTACT</Link>
                        </div>
                    </div>
                </nav>

                <main className="ubp-content">
                    <section className="hero-section">
                        <div className="hero-header">
                            <h1 className="hero-title">RETRO</h1>
                            <h1 className="hero-title outline">ADVENTURES</h1>
                        </div>

                        <div className="hero-body">
                            <div className="info-cell">
                                <p className="slogan-text">
                                    MAKING <span className="text-green">RETRO</span> ADVENTURES <br/>
                                    WITH <span className="text-blue">MODERN</span> MECHANICS
                                </p>
                                <Link to="/games" className="cta-button">
                                    DISCOVER OUR GAMES <span>→</span>
                                </Link>
                            </div>
                            <div className="visual-cell">
                                <div className="pixel-matrix">
                                    <div className="p-box green"></div>
                                    <div className="p-box blue"></div>
                                    <div className="p-box red"></div>
                                    <div className="p-box orange"></div>
                                    <div className="p-box magenta"></div>
                                    <div className="p-box dark"></div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="ubp-marquee">
                        <div className="marquee-inner">
                            UNBURIED PIXELS • BEYOND THE GRID • EST. 2025 • HIGH FIDELITY • PIXEL ART • UNBURIED PIXELS • BEYOND THE GRID • EST. 2025 • HIGH FIDELITY • PIXEL ART •
                        </div>
                    </div>
                </main>

                <footer className="ubp-footer">
                    <div className="footer-grid">
                        <div className="footer-col">
                            <p className="col-title">SOCIAL</p>
                            <div className="links">
                                <a href="https://instagram.com/UnburiedPixels" target="_blank" rel="noreferrer">INSTAGRAM</a>
                                <a href="https://twitter.com/UnburiedPixels" target="_blank" rel="noreferrer">X/TWITTER</a>
                                <a href="https://github.com/LuxJson" target="_blank" rel="noreferrer">GITHUB</a>
                            </div>
                        </div>
                        <div className="footer-col">
                            <p className="col-title">GET IN TOUCH</p>
                            <div className="links">
                                <a href="mailto:contatosadberry@gmail.com">HELLO@UNBURIEDPIXELS.COM</a>
                                <a href="https://UnburiedPixels.itch.io" target="_blank" rel="noreferrer">ITCH.IO</a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <span>© UNBURIED PIXELS</span>
                        <span>MADE IN PIXELS</span>
                    </div>
                </footer>


                {/*
                    Made By Unburied Pixels Team
                    
                            eed*"""""""""**be,
                            .d"                  "b.
                        .d                        b.
                        ."         ..eeeeee..         ".
                    P        z$*"        "*e.        9.
                    A       d"                "b       A
                    J       J    .e*""""""%c     A       L
                    A       A    d"          $     L      A
                    #       %   d      d**y  'L    %      #
                    #       %   $     $ ,, Y  .$   %      #       _ _ 
                    #       %   $     *  """   F   %      #      (@)@)
                    #       V    4.    $.   .e"    Y      #        % %
                    #        $    *.    """"     .Y      V         $ $
                    #        'b     "b.      ..e*       Y         .eeee
                    V         '$      ""eeee""        eP         A     %
                    Y         eb                ..d*"         _#    O %
                    I    _e%*""""*$ee......ee$*"eeeeeeeezee$**"       $
                    V ,"                                            B
                    J'                                        _,e=""
                    .'#######################################DWB''
                */}
            </div>
        </>

    );
}