import styled from 'styled-components';

import colors from '../../../styling/colors';
import spacing from '../../../styling/spacing';

export const ErrorList = styled.ul`
    padding: ${spacing.xs} 0 0 ${spacing.sm};
`;
export const ErrorItem = styled.li`
    color: ${colors.error};
`;
