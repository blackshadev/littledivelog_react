import React from 'react';

import { TextField as MUITextField } from '@mui/material';
import { get, useFormState } from 'react-hook-form';

import FormFieldError from '../../FormFieldError';

type CustomInputProps = {
    name: string;
    onValueChange?: (value: string) => void;
    onChange?: React.ChangeEventHandler;
};

const TextField: React.FC<CustomInputProps & React.ComponentProps<typeof MUITextField>> = ({
    name,
    onChange,
    onValueChange,
    ...props
}) => {
    const { errors } = useFormState();
    const error = get(errors, name)?.message as string | undefined;

    return (
        <MUITextField
            {...props}
            onChange={(event): void => {
                onChange?.(event);
                onValueChange?.(event.target.value);
            }}
            error={!!error}
            helperText={<FormFieldError error={error} />}
        ></MUITextField>
    );
};

export default TextField;
