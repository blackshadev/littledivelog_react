import React, { useCallback, useContext } from 'react';

import { Computer, Dashboard, Download, Group, Label, Login, Logout, Person, Water } from '@mui/icons-material';

import * as api from '../../api/auth';
import ApplicationContext from '../../Context/Application';
import { getMenuIsCollapsed } from '../../Context/Application/selectors';
import { AuthContext } from '../../Context/Auth/auth';
import Route, { route } from '../../Routing/Routes';
import { logOut } from '../../Store/Auth/actions';
import { isLoggedIn as isLoggedInSelector } from '../../Store/Auth/selectors';
import { Nav } from './components';
import NavItem from './NavItem';
import NavSection from './NavSection';
import NavToggler from './NavToggler';

const Navigation: React.FC = () => {
    const [authState, dispatch] = useContext(AuthContext);
    const [applicationState] = useContext(ApplicationContext);

    const isLoggedIn = isLoggedInSelector(authState);

    const logout = useCallback(async () => {
        if (!authState.refreshToken) {
            return;
        }

        await api.logout(authState.refreshToken);
        dispatch(logOut);
    }, [authState.refreshToken, dispatch]);

    return (
        <Nav $isCollapsed={getMenuIsCollapsed(applicationState)}>
            {!isLoggedIn && (
                <NavSection>
                    <NavItem icon={<Login />} to={route(Route.Login)}>
                        Login
                    </NavItem>
                </NavSection>
            )}

            {isLoggedIn && (
                <>
                    <NavSection>
                        <NavToggler />
                    </NavSection>

                    <NavSection>
                        <NavItem icon={<Dashboard />} to="/">
                            Dashboard
                        </NavItem>
                    </NavSection>

                    <NavSection>
                        <NavItem icon={<Water />} to={route(Route.Dives)}>
                            Dives
                        </NavItem>
                        <NavItem icon={<Group />} to={route(Route.Buddies)}>
                            Buddies
                        </NavItem>
                        <NavItem icon={<Label />} to={route(Route.Tags)}>
                            Tags
                        </NavItem>
                        <NavItem icon={<Computer />} to={route(Route.Computers)}>
                            Computers
                        </NavItem>
                    </NavSection>

                    <NavSection>
                        <NavItem icon={<Download />} to={route(Route.Downloader)}>
                            Downloader
                        </NavItem>
                        <NavItem icon={<Person />} to={route(Route.Profile)}>
                            Profile
                        </NavItem>
                        <NavItem
                            icon={<Logout />}
                            onClick={(): void => {
                                logout();
                            }}
                        >
                            Logout
                        </NavItem>
                    </NavSection>
                </>
            )}
        </Nav>
    );
};

export default Navigation;
