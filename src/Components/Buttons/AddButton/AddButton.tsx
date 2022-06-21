import React from 'react';

import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/material';
import Fab from '@mui/material/Fab';

import Route, { route } from '../../../Routing/Routes';
import spacing from '../../../Styling/Constants/spacing';
import { navWidth } from '../../Navigation/components';

const StyledFab = styled(Fab)`
    position: fixed;
    top: ${spacing.xxl};
    left: ${navWidth};
    transform: translateX(-50%);
`;

const AddButton: React.FC<{ to: Route }> = ({ to }) => {
    return (
        <StyledFab href={route(to)} color="primary">
            <AddIcon />
        </StyledFab>
    );
};

export default AddButton;
