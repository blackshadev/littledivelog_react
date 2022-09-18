import styled from 'styled-components';

import colors from '../../../Styling/Constants/colors';
import spacing from '../../../Styling/Constants/spacing';

export const FormErrorContainer = styled.div`
    margin-top: ${spacing.md};

    p {
        margin-bottom: ${spacing.sm};
    }
`;

export const ErrorLabel = styled.p`
    color: ${colors.error};
`;
