import React from 'react';

import SaveIcon from '@mui/icons-material/Save';

import { StyledFab } from '../components';

export default function SaveButton(): React.ReactElement {
    return (
        <StyledFab type="submit" color="primary" aria-label="Save">
            <SaveIcon />
        </StyledFab>
    );
}
