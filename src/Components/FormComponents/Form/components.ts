import styled from 'styled-components';

import { formControlClasses } from '@mui/material';

import spacing from '../../../Styling/Constants/spacing';

export const StyledForm = styled.form`
    .${formControlClasses.root} {
        margin-bottom: ${spacing.md};
    }
`;
