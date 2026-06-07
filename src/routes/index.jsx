import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Games from "../pages/Games";
import About from "../pages/About";
import Contact from "../pages/Contact";
import News from "../pages/News";
import Insomnia from "../pages/Insomnia";
import InsomniaNotFound from "../pages/InsomniaNotFound";

export default function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/games" element={<Games />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/news" element={<News />} />
                <Route path="/insomnia" element={<Insomnia />} />
                <Route path="*" element={<InsomniaNotFound />} />
            </Routes>
        </>
    )    
}