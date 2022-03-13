import React from 'react';

import { TextField as MUITextField } from '@mui/material';
import { FieldError, get, useFormState } from 'react-hook-form';

type CustomInputProps = {
    name: string;
    onValueChange?: (value: string) => void;
    onChange?: React.ChangeEventHandler;
};

const TextField: React.FC<
    CustomInputProps & React.ComponentProps<typeof MUITextField>
> = ({ name, onChange, onValueChange, ...props }) => {
    const { errors } = useFormState();
    const error = get(errors, name)?.message as FieldError | undefined;

    return (
        <MUITextField
            {...props}
            onChange={(event): void => {
                onChange?.(event);
                onValueChange?.(event.target.value);
            }}
            error={!!error}
            helperText={error ?? ' '}
        ></MUITextField>
    );
};

export default TextField;
