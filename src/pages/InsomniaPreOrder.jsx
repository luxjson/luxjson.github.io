import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import insomniaLogo from "../assets/images/i2.png";
import useExternalStyle from "../hooks/useExternalStyle";

export default function InsomniaPreOrder() {
    useExternalStyle('InsomniaPreOrder.css');

    const [daysLeft, setDaysLeft] = useState(0);
    const [hoursLeft, setHoursLeft] = useState(0);
    const [minutesLeft, setMinutesLeft] = useState(0);
    const [secondsLeft, setSecondsLeft] = useState(0);

    const [hoje, setHoje] = useState(new Date());
    const dataInicioPreOrder = new Date('2026-12-12T00:00:00-03:00');
    const dataFimPreOrder = new Date('2027-05-25T23:59:59-03:00');
    const dataLancamento = new Date('2027-12-25T12:00:00-03:00');
    
    const isPreOrderAvailable = hoje >= dataInicioPreOrder && hoje <= dataFimPreOrder;
    const isPreOrderExpired = hoje > dataFimPreOrder && hoje < dataLancamento;
    const isGameReleased = hoje >= dataLancamento;

    useEffect(() => {
        if (isPreOrderAvailable) {
            const interval = setInterval(() => {
                const now = new Date();
                const diff = dataFimPreOrder - now;
                
                if (diff <= 0) {
                    setDaysLeft(0);
                    setHoursLeft(0);
                    setMinutesLeft(0);
                    setSecondsLeft(0);
                    clearInterval(interval);
                } else {
                    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                    const hours = Math.floor((diff % (86400000)) / (1000 * 60 * 60));
                    const minutes = Math.floor((diff % (3600000)) / (1000 * 60));
                    const seconds = Math.floor((diff % (60000)) / 1000);
                    
                    setDaysLeft(days);
                    setHoursLeft(hours);
                    setMinutesLeft(minutes);
                    setSecondsLeft(seconds);
                }
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [isPreOrderAvailable]);

    useEffect(() => {
        async function fetchData() {
            const timeResponse = await fetch('https://worldtimeapi.org');
                const timeData = await timeResponse.json();
                if (timeData.datetime) {
                    setHoje(new Date(timeData.datetime));
                }
        }

        fetchData();
    })

    if (hoje < dataInicioPreOrder) {
        return (
            <>
                <header>
                    <Link to="/games/insomnia" className="header">
                        <img className="img" src={insomniaLogo} alt="Unburied Pixels" />
                    </Link>
                </header>
                <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, justifyContent: 'center' }}>
                    <div style={{ textAlign: 'center', width: '380px', marginTop: '40px', padding: '40px', border: '3px solid #000' }}>
                        <h2 style={{ marginBottom: '15px', fontSize: '1.5rem' }}>Pre-order Not Available Yet</h2>
                        <p style={{ fontSize: '0.8rem', lineHeight: '1.5', marginBottom: '10px' }}>
                            Pre-order will open on
                        </p>
                        <p style={{ fontSize: '1.3rem', fontWeight: 'bold', margin: '20px 0' }}>
                            December 12, 2026
                        </p>
                        <div className="action" style={{ marginTop: '30px', justifyContent: 'center' }}>
                            <Link to="/games/insomnia" className="link">
                                <div className="border">Back</div>
                            </Link>
                        </div>
                    </div>
                </main>
                <footer>
                    <Link to="/games/insomnia" className="link-2">
                        <p>Back to INSOMNIA page</p>
                    </Link>
                    <p className="copy">
                        © 2026 Unburied Pixels. All rights reserved.
                    </p>
                </footer>
            </>
        );
    }

    if (isPreOrderExpired) {
        return (
            <>
                <header>
                    <Link to="/games/insomnia" className="header">
                        <img className="img" src={insomniaLogo} alt="Unburied Pixels" />
                    </Link>
                </header>
                <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, justifyContent: 'center' }}>
                    <div style={{ textAlign: 'center', width: '700px', marginTop: '40px', padding: '40px', border: '3px solid #000', backgroundColor: '#f9f9f9' }}>
                        <h2 style={{ marginBottom: '15px', fontSize: '1.8rem' }}>Pre-order Period Ended</h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.5', marginBottom: '10px' }}>
                            The pre-order period has ended.
                        </p>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.5', marginBottom: '10px' }}>
                            The game will be available on
                        </p>
                        <p style={{ fontSize: '1.3rem', fontWeight: 'bold', margin: '20px 0' }}>
                            December 25, 2027
                        </p>
                        <div className="action" style={{ marginTop: '30px', justifyContent: 'center' }}>
                            <Link to="/games/insomnia" className="link">
                                <div className="border">Back to game</div>
                            </Link>
                        </div>
                    </div>
                </main>
                <footer>
                    <Link to="/games/insomnia" className="link-2">
                        <p>Back to INSOMNIA page</p>
                    </Link>
                    <p className="copy">
                        © 2026 Unburied Pixels. All rights reserved.
                    </p>
                </footer>
            </>
        );
    }

    if (isGameReleased) {
        return (
            <>
                <header>
                    <Link to="/games/insomnia" className="header">
                        <img className="img" src={insomniaLogo} alt="Unburied Pixels" />
                    </Link>
                </header>
                <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, justifyContent: 'center' }}>
                    <div style={{ textAlign: 'center', width: '700px', marginTop: '40px', padding: '40px', border: '3px solid #000', backgroundColor: '#f9f9f9' }}>
                        <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🎮</div>
                        <h2 style={{ marginBottom: '15px', fontSize: '1.8rem' }}>Game Released!</h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.5', marginBottom: '10px' }}>
                            INSOMNIA is now available for download!
                        </p>
                        <div className="action" style={{ marginTop: '30px', justifyContent: 'center' }}>
                            <Link to="/games/insomnia/download" className="link-4">
                                <div className="border2">Download Now</div>
                            </Link>
                        </div>
                    </div>
                </main>
                <footer>
                    <Link to="/games/insomnia" className="link-2">
                        <p>Back to INSOMNIA page</p>
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
                <Link to="/games/insomnia" className="header">
                    <img className="img" src={insomniaLogo} alt="Unburied Pixels" />
                </Link>
            </header>

            <main>
                <div className="countdown-container">
                    <div className="countdown-timer">
                        <div className="countdown-block">
                            <span className="countdown-number">{daysLeft}</span>
                            <span className="countdown-label">DAYS</span>
                        </div>
                        <div className="countdown-block">
                            <span className="countdown-number">{hoursLeft}</span>
                            <span className="countdown-label">HOURS</span>
                        </div>
                        <div className="countdown-block">
                            <span className="countdown-number">{minutesLeft}</span>
                            <span className="countdown-label">MINUTES</span>
                        </div>
                        <div className="countdown-block">
                            <span className="countdown-number">{secondsLeft}</span>
                            <span className="countdown-label">SECONDS</span>
                        </div>
                    </div>
                    <p className="countdown-text">Until Pre-order Ends!</p>
                </div>

                <p style={{ marginTop: '20px', fontSize: '1.5rem' }}>
                    PRE-ORDER INSOMNIA
                </p>
                
                <p style={{ marginTop: '20px', fontSize: '1.2rem', color: '#333' }}>
                    Choose your platform
                </p>

                <div className="action">
                    <a 
                        href="https://unburiedpixels.itch.io/insomnia"
                        target="_blank"
                        className="link"
                        rel="noreferrer"
                    >
                        <div className="border">itch.io</div>
                    </a>
                    
                    <a 
                        href="/games/insomnia/preorders/steam"
                        className="link"
                        rel="noreferrer"
                    >
                        <div className="border">Steam</div>
                    </a>
                </div>

                <div className="trailer" style={{ marginTop: '60px' }}>
                    <h2>Pre-order Benefits</h2>
                    <div style={{ 
                        textAlign: 'center', 
                        maxWidth: '600px', 
                        margin: '0 auto',
                        lineHeight: '1.8'
                    }}>
                        <p>Exclusive in-game content</p>
                        <p>Early access to beta</p>
                        <p>Digital artbook</p>
                        <p>Original soundtrack</p>
                        <p>20% discount on full price</p>
                    </div>
                </div>
            </main>

            <footer>
                <Link to="/games/insomnia" className="link-2">
                    <p>Back to INSOMNIA page</p>
                </Link>
                <p className="copy">
                    © 2026 Unburied Pixels. All rights reserved.
                </p>
            </footer>
        </>
    );
}