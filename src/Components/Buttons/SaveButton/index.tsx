import React, { useContext } from 'react';

import SaveIcon from '@mui/icons-material/Save';

import ApplicationContext from '../../../Context/Application';
import { getMenuIsCollapsed } from '../../../Context/Application/selectors';
import { StyledFab } from '../components';

export default function SaveButton(): React.ReactElement {
    const [appState] = useContext(ApplicationContext);

    return (
        <StyledFab menuIsCollapsed={getMenuIsCollapsed(appState)} type="submit" color="primary" aria-label="Save">
            <SaveIcon />
        </StyledFab>
    );
}
