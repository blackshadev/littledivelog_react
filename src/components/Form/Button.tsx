import React from 'react';

import styled from 'styled-components';

import colors from '../../styling/colors';
import misc from '../../styling/misc';
import spacing from '../../styling/spacing';

const Button = styled.button`
    &:focus {
        color: ${colors.highlight};
        border-color: ${colors.highlight};
        text-decoration: underline;
    }
    &:hover {
        color: ${colors.highlight};
        border-color: ${colors.highlight};
    }

    outline: 0;
    border-radius: ${misc.roundedBorders};
    border: 1px solid ${colors.accent};
    color: ${colors.accent};
    padding: ${spacing.sm} ${spacing.md};
    margin-right: ${spacing.sm} ${spacing.md};
    background: transparent;
`;

export default Button;
