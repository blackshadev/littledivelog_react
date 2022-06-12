import React from 'react';

import BuddyDetail from '../Pages/Buddies/BuddyDetail';
import BuddyOverview from '../Pages/Buddies/BuddyOverview';
import DiveDetails from '../Pages/Dives/DiveDetails';
import DiveOverview from '../Pages/Dives/DiveOverview';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import TagDetail from '../Pages/Tags/TagDetail';
import TagsOverview from '../Pages/Tags/TagsOverview';
import { Role } from '../Store/Auth/roles';

type RouteProperties = {
    element: React.ReactNode;
    path: string;
    role: Role;
};

export enum Route {
    Home,
    Login,
    Dives,
    DiveDetail,
    Buddies,
    BuddyDetail,
    Tags,
    TagDetail,
}

const _allRoutes: { [key in Route]: RouteProperties } = {
    [Route.Home]: { element: <Home />, path: '/', role: Role.Any },
    [Route.Login]: { element: <Login />, path: '/login', role: Role.Guest },
    [Route.Dives]: { element: <DiveOverview />, path: '/dives', role: Role.User },
    [Route.DiveDetail]: { element: <DiveDetails />, path: '/dives/:diveId', role: Role.User },
    [Route.Buddies]: { element: <BuddyOverview />, path: '/buddy/', role: Role.User },
    [Route.BuddyDetail]: { element: <BuddyDetail />, path: '/buddy/:buddyId', role: Role.User },
    [Route.Tags]: { element: <TagsOverview />, path: '/tag', role: Role.User },
    [Route.TagDetail]: { element: <TagDetail />, path: '/tag/:tagId', role: Role.User },
};

export function getRouteProperties(route: Route): RouteProperties {
    return _allRoutes[route];
}

export function route(route: Route, params: { [name: string]: string } = {}): string {
    const paramRegExp = /:([^/]+)/g;

    const path = getRouteProperties(route).path;

    return path.replace(paramRegExp, function (_, paramName: string) {
        return params[paramName];
    });
}

export function getDefaultRoute(role: Role): RouteProperties {
    if (role === Role.Guest) {
        return _allRoutes[Route.Login];
    }
    return _allRoutes[Route.Home];
}
export function allRoutes(): RouteProperties[] {
    return Object.values(_allRoutes);
}

export default Route;
