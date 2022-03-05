import React, { useContext } from 'react';

import MUIDateTimePicker from '@mui/lab/DateTimePicker';
import { TextField } from '@mui/material';
import { Controller, FieldError, get, useFormState } from 'react-hook-form';

import SubmitContext from '../../Form/SubmitContext';

type FormInputProps = React.ComponentProps<typeof TextField> & {
    name: string;
    label: string;
};

const DateTimePicker: React.FC<FormInputProps> = ({
    name,
    label,
    ...props
}) => {
    const submitContext = useContext(SubmitContext);
    const { errors } = useFormState();
    const error = get(errors, name)?.message as FieldError | undefined;

    return (
        <Controller
            name={name}
            render={({ field }): React.ReactElement => (
                <MUIDateTimePicker
                    mask="__-__-____ __:__"
                    onChange={(date: unknown): void => {
                        field.onChange(date);
                        field.onBlur();

                        if (date !== field.value) {
                            submitContext.blur();
                        }
                    }}
                    value={field.value}
                    label={label}
                    autoFocus={true}
                    renderInput={(params): React.ReactElement => (
                        <TextField
                            {...props}
                            {...params}
                            variant="outlined"
                            helperText={error ?? ' '}
                            error={!!error}
                        />
                    )}
                />
            )}
        />
    );
};
DateTimePicker.displayName = 'DateTimePicker';

export default DateTimePicker;
