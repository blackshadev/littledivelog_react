import styled from 'styled-components';

import colors from '../../styling/colors';
import misc from '../../styling/misc';
import spacing from '../../styling/spacing';

const Input = styled.input`
    font-size: 0.9rem;
    border: 1px solid ${colors.gray};
    border-radius: ${misc.roundedBorders};
    width: 100%;

    padding: ${spacing.md} ${spacing.md} ${spacing.sm} ${spacing.md};
    background: ${colors.background};
`;

export default Input;
