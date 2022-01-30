import React from 'react';

import DiveDetails from './pages/DiveDetails';
import Dives from './pages/Dives';
import Home from './pages/Home';
import Login from './pages/Login';

type RouteProperties = {
    element: React.ReactNode;
    path: string;
};

export enum Route {
    Home,
    Login,
    Dives,
    DiveDetail,
}

const _allRoutes: { [key in Route]: RouteProperties } = {
    [Route.Home]: { element: <Home />, path: '/' },
    [Route.Login]: { element: <Login />, path: '/login' },
    [Route.Dives]: { element: <Dives />, path: '/dives' },
    [Route.DiveDetail]: { element: <DiveDetails />, path: '/dives/:diveId' },
};

export function getRouteProperties(route: Route): RouteProperties {
    return _allRoutes[route];
}

export function route(
    route: Route,
    params: { [name: string]: string } = {},
): string {
    const paramRegExp = /:([^/]+)/g;

    const path = getRouteProperties(route).path;

    return path.replace(paramRegExp, function (_, paramName: string) {
        return params[paramName];
    });
}

export function getDefaultRoute(): RouteProperties {
    return _allRoutes[Route.Home];
}
export function allRoutes(): RouteProperties[] {
    return Object.values(_allRoutes);
}

export default Route;
