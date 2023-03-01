import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css';
import HomePage from "./pages/Home";
import FavoritesPage from "./pages/Favorites";

function App() {

    return (
        <div className="App">
            <main className="App__main">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<HomePage/>} />
                        <Route path="/favorites" element={<FavoritesPage/>} />
                    </Routes>
                </BrowserRouter>
            </main>
        </div>
    );
}

export default App;
