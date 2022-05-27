import React from 'react';

import { TextField as MUITextField } from '@mui/material';
import PropTypes from 'prop-types';
import { get, useFormState } from 'react-hook-form';

import FormFieldError from '../../FormFieldError';

type CustomInputProps = {
    name: string;
    onValueChange?: (value: string) => void;
    onChange?: React.ChangeEventHandler;
};

const TextField: React.FC<CustomInputProps & React.ComponentProps<typeof MUITextField>> = React.forwardRef(
    ({ name, onChange, onValueChange, ...props }, ref) => {
        const { errors } = useFormState();
        const error = get(errors, name)?.message as string | undefined;

        return (
            <MUITextField
                ref={ref}
                {...props}
                onChange={(event): void => {
                    onChange?.(event);
                    onValueChange?.(event.target.value);
                }}
                error={!!error}
                helperText={<FormFieldError error={error} />}
            ></MUITextField>
        );
    },
);
TextField.displayName = 'TextField';
TextField.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    onValueChange: PropTypes.func,
};

export default TextField;
