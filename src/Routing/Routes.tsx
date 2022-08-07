import React from 'react';

import BuddyDetail from '../Pages/Buddies/BuddyDetail';
import BuddyDetailNew from '../Pages/Buddies/BuddyDetailNew';
import BuddyOverview from '../Pages/Buddies/BuddyOverview';
import ComputerOverview from '../Pages/Computers/ComputerOverview';
import DiveDetails from '../Pages/Dives/DiveDetails';
import DiveDetailsNew from '../Pages/Dives/DiveDetailsNew';
import DiveOverview from '../Pages/Dives/DiveOverview';
import Downloader from '../Pages/Downloader';
import Login from '../Pages/Login';
import TagDetail from '../Pages/Tags/TagDetail';
import TagDetailNew from '../Pages/Tags/TagDetailNew';
import TagsOverview from '../Pages/Tags/TagsOverview';
import { ChangePassword } from '../Pages/User/ChangePassword';
import { Dashboard } from '../Pages/User/Dashboard';
import Profile from '../Pages/User/Profile';
import Register from '../Pages/User/Register';
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
    DiveDetailNew,
    Downloader,
    Buddies,
    BuddyDetail,
    BuddyDetailNew,
    Tags,
    TagDetail,
    TagDetailNew,
    Computers,
    Profile,
    ChangePassword,
    Register,
}

const _allRoutes: { [key in Route]: RouteProperties } = {
    [Route.Home]: { element: <Dashboard />, path: '/', role: Role.Any },
    [Route.Login]: { element: <Login />, path: '/login', role: Role.Guest },
    [Route.Dives]: { element: <DiveOverview />, path: '/dives', role: Role.User },
    [Route.DiveDetail]: { element: <DiveDetails />, path: '/dives/:diveId', role: Role.User },
    [Route.DiveDetailNew]: { element: <DiveDetailsNew />, path: '/dives/new', role: Role.User },
    [Route.Buddies]: { element: <BuddyOverview />, path: '/buddies/', role: Role.User },
    [Route.BuddyDetail]: { element: <BuddyDetail />, path: '/buddies/:buddyId', role: Role.User },
    [Route.BuddyDetailNew]: { element: <BuddyDetailNew />, path: '/buddy/new', role: Role.User },
    [Route.Tags]: { element: <TagsOverview />, path: '/tags', role: Role.User },
    [Route.TagDetailNew]: { element: <TagDetailNew />, path: '/tags/new', role: Role.User },
    [Route.TagDetail]: { element: <TagDetail />, path: '/tags/:tagId', role: Role.User },
    [Route.Computers]: { element: <ComputerOverview />, path: '/computers', role: Role.User },
    [Route.Profile]: { element: <Profile />, path: '/profile', role: Role.User },
    [Route.ChangePassword]: { element: <ChangePassword />, path: '/profile/change-password', role: Role.User },
    [Route.Register]: { element: <Register />, path: '/register', role: Role.Guest },
    [Route.Downloader]: { element: <Downloader />, path: '/downloader', role: Role.Any },
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
