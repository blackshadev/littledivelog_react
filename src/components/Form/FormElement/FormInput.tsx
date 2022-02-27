import React, { useContext } from 'react';

import { Controller } from 'react-hook-form';

import SubmitContext from '../Form/SubmitContext';
import NormalInput from '../Inputs/Input/Input';
import FormElement from './FormElement';

type FormInputProps = React.ComponentProps<typeof NormalInput> & {
    name: string;
    label: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Input?: React.FC<any>;
};

const FormInput: React.FC<FormInputProps> = ({
    label,
    Input,
    name,
    ...props
}) => {
    const ChildInput = Input ?? NormalInput;
    const submitContext = useContext(SubmitContext);

    return (
        <FormElement name={name} label={label}>
            <Controller
                name={name}
                render={({ field }): React.ReactElement => (
                    <ChildInput
                        onBlur={(
                            event: React.FocusEvent<HTMLFormElement>,
                            value: unknown,
                        ): void => {
                            value = value ?? event.target.value;
                            field.onChange(value);
                            field.onBlur();

                            if (value !== field.value) {
                                submitContext.blur();
                            }
                        }}
                        onChange={(
                            event: React.ChangeEvent<HTMLFormElement>,
                            value: unknown,
                        ): void => {
                            field.onChange(value ?? event.target.value);
                        }}
                        value={field.value}
                        {...props}
                    />
                )}
            />
        </FormElement>
    );
};
FormInput.displayName = 'FormInput';

export default FormInput;
