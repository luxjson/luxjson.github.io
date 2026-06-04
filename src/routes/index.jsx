import { Route, Routes } from "react-router-dom";

import Insomnia from "../pages/Insomnia";
import InsomniaNotFound from "../pages/InsomniaNotFound";

export default function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Insomnia />} />
                <Route path="*" element={<InsomniaNotFound />} />
            </Routes>
        </>
    )    
}