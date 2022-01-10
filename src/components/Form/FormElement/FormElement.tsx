import React, { useState } from 'react';

import styled from 'styled-components';

import colors from '../../../styling/colors';
import spacing from '../../../styling/spacing';
import FormFieldErrors from '../FormFieldErrors';
import { StyledInput } from '../Input/Input';
import FormElementContext from './FormElementContext';

const Label = styled.label`
    position: relative;
    top: ${spacing.sm};
    padding: 0 ${spacing.xs};
    margin-left: ${spacing.md};
    background: ${colors.background};
    color: ${colors.gray};
    z-index: 1;
`;

const Container = styled.div.attrs((p: { focussed: boolean }) => p)`
    margin-top: -${spacing.sm};
    margin-bottom: ${spacing.md};
    display: block;

    ${Label} + ${StyledInput} {
        top: -${spacing.sm};
    }

    ${(p): string | false =>
        p.focussed &&
        `
            ${Label} {
                color: ${colors.highlight};
            }
        `}
`;

const FormElement: React.FC<
    React.PropsWithChildren<{ label: string; name: string }>
> = ({ label, children, name }) => {
    const [focussed, setFocussed] = useState(false);

    return (
        <FormElementContext.Provider
            value={{
                focus(b): void {
                    setFocussed(b);
                },
            }}
        >
            <Container focussed={focussed}>
                <Label>{label}</Label>
                {children}
                <FormFieldErrors name={name} />
            </Container>
        </FormElementContext.Provider>
    );
};

export default FormElement;
