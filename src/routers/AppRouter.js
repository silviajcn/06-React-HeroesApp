import React from 'react';
import { Routes, Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import LoginPage from '../auth/pages/LoginPage';
import HeroesRoutes from './HeroesRoutes';

const AppRouter = () => {
    return (
        <>
            <Routes>
                
                <Route path='login/*' element={
                    <PublicRoute>
                        <Routes>
                            <Route path='/*' element={<LoginPage />} />
                        </Routes>
                    </PublicRoute>
                } />

                <Route path='/*' element={
                    <PrivateRoute>
                        <HeroesRoutes />
                    </PrivateRoute>
                } />
                
            </Routes>
        </>
    )
};

export default AppRouter;