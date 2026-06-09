import { Route, Routes } from "react-router-dom";

import LuxJson from "../pages/luxjson";
import NotFound from "../pages/NotFound";


export default function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={<LuxJson />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )    
}
