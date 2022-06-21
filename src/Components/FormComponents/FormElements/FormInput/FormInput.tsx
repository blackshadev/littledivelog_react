import React, { useContext } from 'react';

import { Controller } from 'react-hook-form';

import SubmitContext from '../../Form/SubmitContext';
import TextField from '../../Inputs/TextField';

type FormInputProps = React.ComponentProps<typeof TextField> & {
    name: string;
    label: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Input?: React.FC<any>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    defaultValue?: any;
};

const FormInput: React.FC<FormInputProps> = ({ Input, name, label, defaultValue, ...props }) => {
    const ChildInput = Input ?? TextField;
    const submitContext = useContext(SubmitContext);

    return (
        <Controller
            name={name}
            defaultValue={defaultValue}
            render={({ field }): React.ReactElement => (
                <ChildInput
                    onBlur={(event: React.FocusEvent<HTMLInputElement>, value?: unknown): void => {
                        value = value ?? event.target.value;
                        field.onChange(value);
                        field.onBlur();

                        if (value !== field.value) {
                            submitContext.blur();
                        }
                    }}
                    onValueChange={(value?: unknown): void => {
                        field.onChange(value);
                    }}
                    value={field.value ?? ''}
                    label={label}
                    name={name}
                    {...props}
                />
            )}
        />
    );
};
FormInput.displayName = 'FormInput';

export default FormInput;
