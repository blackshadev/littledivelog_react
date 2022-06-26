import React from 'react';

import AddIcon from '@mui/icons-material/Add';

import Route, { route } from '../../../Routing/Routes';
import { StyledFab } from '../components';

export default function AddButton({ to }: { to: Route }): React.ReactElement {
    return (
        <StyledFab href={route(to)} color="primary">
            <AddIcon />
        </StyledFab>
    );
}
