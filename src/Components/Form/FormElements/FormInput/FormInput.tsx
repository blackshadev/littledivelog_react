import React, { useContext } from 'react';

import {
    FormControl,
    FormHelperText,
    InputLabel,
    TextField,
} from '@mui/material';
import { Controller, FieldError, get, useFormState } from 'react-hook-form';

import SubmitContext from '../../Form/SubmitContext';

type FormInputProps = React.ComponentProps<typeof TextField> & {
    name: string;
    label: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Input?: React.FC<any>;
};

const FormInput: React.FC<FormInputProps> = ({
    Input,
    name,
    label,
    ...props
}) => {
    const ChildInput = Input ?? TextField;
    const submitContext = useContext(SubmitContext);

    return (
        <Controller
            name={name}
            render={({ field }): React.ReactElement => (
                <ChildInput
                    onBlur={(
                        event: React.FocusEvent<HTMLInputElement>,
                        value?: unknown,
                    ): void => {
                        value = value ?? event.target.value;
                        field.onChange(value);
                        field.onBlur();

                        if (value !== field.value) {
                            submitContext.blur();
                        }
                    }}
                    onChange={(value?: unknown): void => {
                        field.onChange(value);
                    }}
                    value={field.value}
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
