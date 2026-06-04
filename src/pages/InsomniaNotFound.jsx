import { Link } from "react-router-dom";
import useExternalStyle from "../hooks/useExternalStyle";

export default function InsomniaNotFound() {
    useExternalStyle('InsomniaNotFound.css');

    return (

        <>
            
        <title>
            Page Not Found
         </title>

            <div className="insomnia-not-found">
                <main>
                    <p className="status-title">PAGE NOT FOUND</p>

                    <div className="action">
                        <Link to="/" className="link">
                            <div className="border">WAKE UP</div>
                        </Link>
                    </div>
                </main>
            </div>
        </>
    );
}