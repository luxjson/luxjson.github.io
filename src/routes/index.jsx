import { Route, Routes } from "react-router-dom";

import LuxJson from "../pages/luxjson";


export default function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={<LuxJson />} />
            </Routes>
        </>
    )    
}
