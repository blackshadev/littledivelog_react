import React from 'react';

import { Outlet } from 'react-router-dom';

import Navigation from '../Navigation';
import { Container, Main } from './components';

const Layout: React.FC = () => (
    <Container>
        <Navigation />
        <Main>
            <Outlet />
        </Main>
    </Container>
);
export default Layout;
