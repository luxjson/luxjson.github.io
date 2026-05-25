import { Link } from "react-router-dom";
import useExternalStyle from "../hooks/useExternalStyle";

export default function InsomniaNotFound() {
    useExternalStyle('InsomniaNotFound.css');

    return (

        <>

        <link rel="icon" type="image/x-icon" href="/faviconInsomnia.ico" />
            
        <title>
            Page Not Found
         </title>

            <div className="insomnia-not-found">
                <main>
                    <p className="status-title">PAGE NOT FOUND</p>

                    <div className="action">
                        <Link to="/games/insomnia" className="link">
                            <div className="border">WAKE UP</div>
                        </Link>
                        <Link to="/" className="link-4">
                            <div className="border2">EXIT DREAM</div>
                        </Link>
                    </div>
                </main>
            </div>
        </>
    );
}