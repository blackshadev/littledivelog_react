import { Fab, styled } from '@mui/material';

import navigationWidth from '../../Helpers/navigationWidth';
import spacing from '../../Styling/Constants/spacing';
import { transition } from '../Navigation/components';

type FabProps = { menuIsCollapsed: boolean };

export const StyledFab = styled(Fab, {
    shouldForwardProp: (prop) => prop !== 'menuIsCollapsed',
})<FabProps>`
    position: fixed;
    top: ${spacing.xxl};
    left: ${(prop): number => navigationWidth(prop.menuIsCollapsed)}px;
    transition: ${transition('left')};
    transform: translateX(-50%);
`;
