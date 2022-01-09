import React, { useContext } from 'react';

import styled from 'styled-components';

import colors from '../../../styling/colors';
import misc from '../../../styling/misc';
import spacing from '../../../styling/spacing';
import FormElementContext from '../FormElement/FormElementContext';

export const StyledInput = styled.input`
    font-size: 0.9rem;
    border: 1px solid ${colors.gray};
    border-radius: ${misc.roundedBorders};
    width: 100%;

    padding: ${spacing.md} ${spacing.md} ${spacing.sm} ${spacing.md};
    background: ${colors.background};

    &:focus {
        outline: 0;
        border-color: ${colors.highlight};
        box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 25%);
    }
`;

const Input: React.FC<React.ComponentProps<typeof StyledInput>> = (props) => {
    const { focus } = useContext(FormElementContext);

    return (
        <StyledInput
            onFocus={(): void => focus(true)}
            onBlur={(): void => focus(false)}
            {...props}
        ></StyledInput>
    );
};

export default Input;
