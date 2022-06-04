import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import NavBar from '../ui/components/NavBar';
import HomePage from '../heroes/pages/HomePage';
import MarvelPage from '../heroes/pages/MarvelPage';
import DcPage from '../heroes/pages/DcPage';
import SearchPage from '../heroes/pages/SearchPage';
import HeroPage from '../heroes/pages/HeroPage';

const HeroesRoutes = () => {
    return (
        <>
            <NavBar />

            <div className='container mt-3 mb-5'>
                <Routes>

                    <Route path='/home' element={<HomePage />} />
                
                    <Route path='/marvel' element={<MarvelPage />} />

                    <Route path='/dc' element={<DcPage />} />

                    <Route path="search" element={<SearchPage />} />

                    <Route path='/heroe/:heroeId' element={<HeroPage />} />

                    <Route path="/" element={<Navigate to="/home" />} />
         
                </Routes>
            </div>

        </>
    )
};

export default HeroesRoutes;