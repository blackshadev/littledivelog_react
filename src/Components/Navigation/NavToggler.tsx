import React, { useContext } from 'react';

import ChevronLeft from '@mui/icons-material/ChevronLeft';

import ApplicationContext from '../../Context/Application';
import { toggleMenu } from '../../Context/Application/actions';
import { getMenuIsCollapsed } from '../../Context/Application/selectors';
import { NavToggler as StyledNavToggler } from './components';

export default function NavToggler(): React.ReactElement {
    const [applicationState, dispatch] = useContext(ApplicationContext);

    return (
        <StyledNavToggler $menuIsCollapsed={getMenuIsCollapsed(applicationState)}>
            <button onClick={(): void => dispatch(toggleMenu())}>
                <ChevronLeft />
            </button>
        </StyledNavToggler>
    );
}
