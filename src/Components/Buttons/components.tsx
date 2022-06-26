import { Fab, styled } from '@mui/material';

import spacing from '../../Styling/Constants/spacing';
import { navWidth } from '../Navigation/components';

export const StyledFab = styled(Fab)`
    position: fixed;
    top: ${spacing.xxl};
    left: ${navWidth};
    transform: translateX(-50%);
`;
