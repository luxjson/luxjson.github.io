import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Games from "../pages/Games";
import Contact from "../pages/Contact";
import Insomnia from "../pages/Insomnia";
import InsomniaPreOrder from "../pages/InsomniaPreOrder";
import InsomniaDownload from "../pages/InsomniaDownload";
import InsomniaSteam from "../pages/InsomniaSteam";
import NotFound from "../pages/NotFound";

export default function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/games" element={<Games />} />
                <Route path="/contact" element={<Contact />} />

                <Route path="/games/INSOMNIA" element={<Insomnia />} />
                <Route path="/games/INSOMNIA/preorder" element={<InsomniaPreOrder />} />
                <Route path="/games/INSOMNIA/download" element={<InsomniaDownload />} />
                <Route path="/games/INSOMNIA/preorder/steam" element={<InsomniaSteam />} />
                
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )    
}