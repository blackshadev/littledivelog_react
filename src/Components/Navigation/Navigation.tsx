import React, { useContext } from 'react';

import { Dashboard, Group, Label, Login, Logout, Water } from '@mui/icons-material';

import { AuthContext } from '../../Context/Auth/auth';
import Route, { route } from '../../Routing/Routes';
import { isLoggedIn as isLoggedInSelector } from '../../Store/Auth/selectors';
import { Nav } from './components';
import NavItem from './NavItem';
import NavSection from './NavSection';

const Navigation: React.FC = () => {
    const { state } = useContext(AuthContext);
    const isLoggedIn = isLoggedInSelector(state);

    return (
        <Nav>
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
                    </NavSection>
                    <NavSection>
                        <NavItem icon={<Logout />} to="/logout">
                            Logout
                        </NavItem>
                    </NavSection>
                </>
            )}
        </Nav>
    );
};

export default Navigation;
