import React from 'react';

import { BrowserRouter, Route, Routes as RouterRoutes } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';

const Routes = () => (
    <>
        <BrowserRouter>
            <RouterRoutes>
                <Route element={<Layout />}>
                    <Route index element={<Home />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                </Route>
            </RouterRoutes>
        </BrowserRouter>
    </>
);

export default Routes;
