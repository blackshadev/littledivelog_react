import React from 'react';

import { BrowserRouter, Route, Routes as RouterRoutes } from 'react-router-dom';

import Layout from '../Components/Layout';
import { allRoutes, getDefaultRoute } from './Routes';

const Router: React.FC = () => (
    <>
        <BrowserRouter>
            <RouterRoutes>
                <Route element={<Layout />}>
                    <Route index element={getDefaultRoute().element}></Route>
                    {allRoutes().map((el) => (
                        <Route
                            key={el.path}
                            path={el.path}
                            element={el.element}
                        />
                    ))}
                </Route>
            </RouterRoutes>
        </BrowserRouter>
    </>
);

export default Router;
