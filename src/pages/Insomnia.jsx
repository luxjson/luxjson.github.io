import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import insomniaLogo from "../assets/images/i2.png";
import trailer1 from "../assets/videos/trailer1.mp4";
import trailer2 from "../assets/videos/trailer2.mp4";
import useExternalStyle from "../hooks/useExternalStyle";
// import screenshot1 from "../assets/images/screenshot1.png";
// import screenshot2 from "../assets/images/screenshot2.png";
// import screenshot3 from "../assets/images/screenshot3.png";
// import screenshot4 from "../assets/images/screenshot4.png";
// import screenshot5 from "../assets/images/screenshot5.png";
// import screenshot6 from "../assets/images/screenshot6.png";
// import screenshot7 from "../assets/images/screenshot7.png";
// import screenshot8 from "../assets/images/screenshot8.png";
// import screenshot9 from "../assets/images/screenshot9.png";

export default function Insomnia() {
    useExternalStyle('insomnia.css');
    
    const [downloadUrl, setDownloadUrl] = useState('https://github.com/luxjson/INSOMNIA/releases/latest');
    const [hoje, setHoje] = useState(new Date());

    useEffect(() => {
        async function fetchLatestVersion() {
            try {
                const response = await fetch('https://api.github.com/repos/luxjson/INSOMNIA/releases/latest');
                const data = await response.json();
                
                if (data && data.assets && data.assets.length > 0) {
                    const exeAsset = data.assets.find(asset => asset.name.endsWith('.exe'));
                    if (exeAsset) {
                        setDownloadUrl(exeAsset.browser_download_url);
                    }
                }

                const timeResponse = await fetch('https://worldtimeapi.org');
                const timeData = await timeResponse.json();
                if (timeData.datetime) {
                    setHoje(new Date(timeData.datetime));
                }
                
            } catch (error) {
                console.error(error);
                setDownloadUrl('https://github.com/luxjson/INSOMNIA/releases/latest');
            }
        }
    fetchLatestVersion();
}, []);


    const dataStoryTrailer = new Date('2026-10-31T12:00:00-03:00');
    const dataLaunch = new Date('2027-12-25T12:00:00-03:00');
    const mostrarStoryTrailer = hoje >= dataStoryTrailer;
    const mostrarLaunch = hoje >= dataLaunch;
    
    return (
        <>


            <header>
                <Link to="/games/insomnia" className="header">
                    <img className="img" src={insomniaLogo} alt="Unburied Pixels" />
                </Link>
            </header>

            <main>

                {!mostrarStoryTrailer && !mostrarLaunch && (
                    <p>Coming Soon</p>
                )}

                {mostrarStoryTrailer && !mostrarLaunch && (
                    <p>
                        Available on December 25, 2027
                    </p>
                )}

                {mostrarLaunch && mostrarStoryTrailer && (
                    <p>
                        Available Now
                    </p>
                )}

                <div className="action">
                    {!mostrarStoryTrailer && !mostrarLaunch && (
                        <>
                            <a href="https://UnburiedPixels.itch.io/insomnia" target="_blank" className="link" rel="noreferrer">
                                <div className="border">itch.io</div>
                            </a>
                            <a href={downloadUrl} target="_blank" className="link-4" rel="noreferrer">
                                <div className="border2">Download Alpha</div>
                            </a>
                        </>    
                    )}

                    {mostrarStoryTrailer && !mostrarLaunch && (
                        <>
                            <a href={downloadUrl} target="_blank" className="link-4" rel="noreferrer">
                                <div className="border2">Download Beta</div>
                            </a>
                            <Link to="/games/insomnia/preorder" className="link-4">
                                <div className="border2">Pre-order</div>
                            </Link>
                        </>    
                        
                    )}
                    {mostrarLaunch && mostrarStoryTrailer && (
                        <>
                            <Link to="/games/insomnia/download" className="link-4" rel="noreferrer">
                                <div className="border2">Download</div>
                            </Link>

                            <a href="https://github.com/luxjson/INSOMNIA/releases/latest" target="_blank" className="link-4" rel="noreferrer">
                                <div className="border2">View Changelog</div>
                            </a>
                        </>    
                    )}
                    


                </div>

                <div className="trailer">
                    <h2>Official Reveal Trailer</h2>
                    <video controls width="50%">
                        <source src={trailer1} type="video/mp4" />
                        Seu navegador não suporta vídeos.
                    </video>
                    
                    {mostrarStoryTrailer && (
                        <>
                            <h2 style={{ marginTop: '2rem' }}>Official Story Trailer</h2>
                            <video controls width="50%">
                                <source src={trailer2} type="video/mp4" />
                                Seu navegador não suporta vídeos.
                            </video>
                        </>
                    )}
                </div>


                {mostrarLaunch &&  mostrarStoryTrailer && (
                    <>
                        <div className="screenshots">
                            <div className="titulo-screenshot">
                                <h1>
                                    Screenshots from INSOMNIA
                                </h1>
                            </div>
                            <div className="info-screenshot">
                                <p>
                                    INSOMNIA is a psychological horror experience where your own mind is the architect of your torment, and the cruelest enemy you’ll face is yourself.
                                </p>
                            </div>

                            <div className="images-screenshot">
                                {/* 
                                    <img src={screenshot1} alt="" />
                                    <img src={screenshot2} alt="" />
                                    <img src={screenshot3} alt="" />
                                    <img src={screenshot4} alt="" />
                                    <img src={screenshot5} alt="" />
                                    <img src={screenshot6} alt="" />
                                    <img src={screenshot7} alt="" />
                                    <img src={screenshot8} alt="" />
                                    <img src={screenshot9} alt="" />
                                */}

                            </div>
                        </div>
                    </>
                )} 
            </main>

            <footer>
                <Link to="/games" className="link-2">
                    <p>Back to games page</p>
                </Link>
                <p className="copy">
                    © 2026 Unburied Pixels. All rights reserved.
                </p>
            </footer>
        </>
    );
}
