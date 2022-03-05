import React from 'react';

import { Button as MUIButton } from '@mui/material';

// import styled from 'styled-components';

// import colors from '../../../styling/colors';
// import misc from '../../../styling/misc';
// import spacing from '../../../styling/spacing';

// const Button = styled.button`
//     &:focus {
//         color: ${colors.highlight};
//         border-color: ${colors.highlight};
//         text-decoration: underline;
//     }
//     &:hover {
//         color: ${colors.highlight};
//         border-color: ${colors.highlight};
//     }

//     outline: 0;
//     border-radius: ${misc.roundedBorders};
//     border: 1px solid ${colors.accent};
//     color: ${colors.accent};
//     padding: ${spacing.sm} ${spacing.md};
//     margin-right: ${spacing.sm} ${spacing.md};
//     background: transparent;
// `;

const Button: React.FC<React.ComponentProps<typeof MUIButton>> = ({
    ...props
}) => {
    return <MUIButton {...props}></MUIButton>;
};

export default Button;
