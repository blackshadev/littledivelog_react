import React, { useContext } from 'react';

import AddIcon from '@mui/icons-material/Add';

import ApplicationContext from '../../../Context/Application';
import { getMenuIsCollapsed } from '../../../Context/Application/selectors';
import Route, { route } from '../../../Routing/Routes';
import { StyledFab } from '../components';

export default function AddButton({ to }: { to: Route }): React.ReactElement {
    const [appState] = useContext(ApplicationContext);

    return (
        <StyledFab menuIsCollapsed={getMenuIsCollapsed(appState)} href={route(to)} color="primary">
            <AddIcon />
        </StyledFab>
    );
}
