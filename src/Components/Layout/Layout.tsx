import React, { useContext } from 'react';

import { Outlet } from 'react-router-dom';

import ApplicationContext from '../../Context/Application';
import { getMenuIsCollapsed } from '../../Context/Application/selectors';
import { UrlMessageToNofiticationBridge } from '../../Routing/UrlMessageToNofiticationBridge';
import Navigation from '../Navigation';
import Notifications from '../Notifications';
import { Container, Main } from './components';

export default function Layout(): React.ReactElement {
    const [appState] = useContext(ApplicationContext);

    return (
        <Container menuIsCollapsed={getMenuIsCollapsed(appState)}>
            <UrlMessageToNofiticationBridge />
            <Navigation />
            <Main>
                <Outlet />
            </Main>
            <Notifications />
        </Container>
    );
}
