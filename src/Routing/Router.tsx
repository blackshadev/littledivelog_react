import React, { useContext } from 'react';

import { BrowserRouter, Navigate, Route, Routes as RouterRoutes } from 'react-router-dom';

import Layout from '../Components/Layout';
import { AuthContext } from '../Context/Auth/auth';
import { hasRole } from '../Store/Auth/roles';
import { getRole } from '../Store/Auth/selectors';
import { allRoutes, getDefaultRoute } from './Routes';

const Router: React.FC = () => {
    const { state } = useContext(AuthContext);
    const role = getRole(state);

    return (
        <>
            <BrowserRouter>
                <RouterRoutes>
                    <Route element={<Layout />}>
                        <Route index element={getDefaultRoute(role).element}></Route>
                        {allRoutes().map((el) => (
                            <Route
                                key={el.path}
                                path={el.path}
                                element={hasRole(role, el.role) ? el.element : <Navigate to="/" replace />}
                            />
                        ))}
                    </Route>
                </RouterRoutes>
            </BrowserRouter>
        </>
    );
};

export default Router;
