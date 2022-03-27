import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Contatos from './Pages/Contatos';
import HomePage from './Pages/Home';


const MainRoutes = () => {
    return(
        <Routes>
            <Route
                path="/"
                element={<HomePage />}
            />
            <Route
                path="/contato"
                element={<Contatos />}
            />
        </Routes>
    )
}

export default MainRoutes;
