import React from 'react';

import styled from 'styled-components';

import colors from '../../styling/colors';
import spacing from '../../styling/spacing';
import Input from './Input';

const Label = styled.label`
    position: relative;
    top: ${spacing.sm};
    padding: 0 ${spacing.xs};
    margin-left: ${spacing.md};
    background: ${colors.background};
    color: ${colors.gray};
    z-index: 1;
`;

const Container = styled.div`
    margin-top: -${spacing.sm};
    margin-bottom: ${spacing.md};
    display: block;

    ${Label} + ${Input} {
        top: -${spacing.sm};
    }
`;

const FormInput: React.FC<
    React.ComponentProps<typeof Input> & { label: string }
> = (props) => {
    return (
        <Container>
            <Label>{props.label}</Label>
            <Input {...props} />
        </Container>
    );
};

export default FormInput;
