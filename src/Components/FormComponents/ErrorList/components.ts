import styled from 'styled-components';

import colors from '../../../Styling/Constants/colors';
import spacing from '../../../Styling/Constants/spacing';

export const ErrorListContainer = styled.ul`
    padding: ${spacing.xs} 0 0 ${spacing.sm};
`;
export const ErrorItem = styled.li`
    color: ${colors.error};
`;
