import React from 'react';
import { Routes, Route } from 'react-router-dom';

import LoginPage from '../auth/pages/LoginPage';
import HeroesRoutes from './HeroesRoutes';

const AppRouter = () => {
    return (
        <>
            <Routes>
                
                <Route path='/login' element={<LoginPage />} />

                <Route path='/*' element={<HeroesRoutes />} />
                
            </Routes>
        </>
    )
};

export default AppRouter;