import React, { useContext } from 'react';

import { Link } from 'react-router-dom';

import { AuthContext } from '../../context/auth';
import { isLoggedIn as isLoggedInSelector } from '../../store/auth/selectors';
import { Nav } from './components';

const Navigation: React.FC = () => {
    const { state } = useContext(AuthContext);
    const isLoggedIn = isLoggedInSelector(state);

    return (
        <Nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                {!isLoggedIn && (
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                )}
                {isLoggedIn && (
                    <li>
                        <Link to="/logout">Logout</Link>
                    </li>
                )}
            </ul>
        </Nav>
    );
};

export default Navigation;
