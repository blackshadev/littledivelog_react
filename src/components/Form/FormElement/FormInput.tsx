import React, { useContext } from 'react';

import { triggerOnChange } from '../../../store/form/actions';
import FormContext from '../Form/FormContext';
import NormalInput from '../Inputs/Input/Input';
import FormElement from './FormElement';

const FormInput: React.FC<
    React.ComponentProps<typeof NormalInput> & {
        onBlur?: (
            event: React.FocusEvent<HTMLInputElement>,
            ...args: unknown[]
        ) => void;
        name: string;
        label: string;
        Input?: React.FC<any>;
    }
> = ({ label, onBlur, Input, name, ...props }) => {
    const ChildInput = Input ?? NormalInput;

    const { dispatch } = useContext(FormContext);
    function handleBlur(
        event: React.FocusEvent<HTMLInputElement>,
        ...args: unknown[]
    ): void {
        onBlur?.(event, ...args);
        dispatch(triggerOnChange);
    }

    return (
        <FormElement name={name} label={label}>
            <ChildInput onBlur={handleBlur} {...props} />
        </FormElement>
    );
};

export default FormInput;
