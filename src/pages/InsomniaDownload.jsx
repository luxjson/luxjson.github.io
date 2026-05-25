import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import insomniaLogo from "../assets/images/i2.png";
import useExternalStyle from "../hooks/useExternalStyle";

export default function InsomniaDownload() {
    useExternalStyle('InsomniaDownload.css');

    const [hoje, setHoje] = useState(new Date());
    const dataLiberacao = new Date('2027-12-25T12:00:00-03:00');
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('contatosadberry@gmail.com');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

     useEffect(() => {
        async function fetchData() {
            try {
                const timeResponse = await fetch('https://worldtimeapi.org');
                const timeData = await timeResponse.json();
                if (timeData.datetime) {
                    setHoje(new Date(timeData.datetime));
                }

            } catch (error) {
                console.error("Erro ao carregar dados externos:", error);
            }
        }
        fetchData();
    }, []);

    if (hoje < dataLiberacao) {
        return (
            <>
                <link rel="icon" type="image/x-icon" href="/faviconInsomnia.ico" />
            
                <title>
                    Insomnia
                </title>

                <header>
                    <Link to="/games/insomnia" className="header">
                        <img className="img" src={insomniaLogo} alt="Unburied Pixels" />
                    </Link>
                </header>
                <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, justifyContent: 'center' }}>
                    <div style={{ textAlign: 'center', width: '380px', marginTop: '40px', padding: '40px', border: '3px solid #000' }}>
                        <h2 style={{ marginBottom: '15px', fontSize: '1.5rem' }}>Not Available Yet</h2>
                        <p style={{ fontSize: '0.8rem', lineHeight: '1.5', marginBottom: '10px' }}>
                            INSOMNIA will be available for download on
                        </p>
                        <p style={{ fontSize: '1.3rem', fontWeight: 'bold', margin: '20px 0' }}>
                            December 25, 2027
                        </p>
                        <div className="action" style={{ marginTop: '30px', justifyContent: 'center' }}>
                            <Link to="/games/insomnia" className="link-4">
                                <div className="border2">Back to game</div>
                            </Link>
                        </div>
                    </div>
                </main>
                <footer>
                    <Link to="/games/insomnia" className="link-2">
                        <p>Back to games page</p>
                    </Link>
                    <p className="copy">
                        © 2026 Unburied Pixels. All rights reserved.
                    </p>
                </footer>
            </>
        );
    }

    return (
        <>
            <header>
                <Link to="/" className="header">
                    <img className="img" src={insomniaLogo} alt="Unburied Pixels" />
                </Link>
            </header>

            <main>
                <p style={{ marginTop: '20px', fontSize: '1.5rem' }}>
                    DOWNLOAD INSOMNIA
                </p>

                <div className="action">
                    <a href="https://unburiedpixels.itch.io/insomnia" target="_blank" className="link" rel="noreferrer">
                        <div className="border">itch.io</div>
                    </a>
                    <a href="https://github.com/luxjson/INSOMNIA/releases/latest" target="_blank" className="link-4" rel="noreferrer">
                        <div className="border2">GitHub</div>
                    </a>
                </div>

                <div className="versions-section">
                    <h3>Available Versions</h3>
                    <div className="version-list">
                        <div className="version-item">
                            <span className="version-name">Windows</span>
                            <span className="version-status">Available</span>
                        </div>
                        <div className="version-item">
                            <span className="version-name">macOS</span>
                            <span className="version-status">Coming soon</span>
                        </div>
                        <div className="version-item">
                            <span className="version-name">Linux</span>
                            <span className="version-status">Coming soon</span>
                        </div>
                    </div>
                </div>

                <div className="partnership-section">
                    <h3>Partnership & Keys</h3>
                    <p>
                        Are you a content creator, streamer, or reviewer? 
                        Want to partner with us or request a press key?
                    </p>
                    
                    <div className="email-container">
                        <span className="email">contatosadberry@gmail.com</span>
                        <button onClick={handleCopyEmail} className="copy-btn">
                            {copied ? '✓ Copied!' : 'Copy email'}
                        </button>
                    </div>
                    
                    <p className="contact-note">
                        Send us an email with your channel/website info and we'll get back to you
                    </p>
                </div>
            </main>

            <footer>
                <Link to="/games/insomnia" className="link-2">
                    <p>Back to games page</p>
                </Link>
                <p className="copy">
                    © 2026 Unburied Pixels. All rights reserved.
                </p>
            </footer>
        </>
    );
}