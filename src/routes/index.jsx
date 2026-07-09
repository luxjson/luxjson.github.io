import { Route, Routes } from "react-router-dom";

import Luxjson from "../pages/luxjson";
import Insomnia from "../pages/insomnia";
import NotFound from "../pages/NotFound";


export default function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Luxjson />} />
                <Route path="/insomnia" element={<Insomnia />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )    
}
