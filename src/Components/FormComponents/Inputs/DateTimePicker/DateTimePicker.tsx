import React from 'react';

import { DateTimePicker as MUIDateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

import TextField from '../TextField';

type FormInputProps = React.ComponentProps<typeof TextField> & {
    name: string;
    label: string;
    placeholder: string;
    value: unknown;
    onValueChange?: (value: unknown) => void;
};

const DateTimePicker: React.FC<FormInputProps> = ({ name, label, placeholder, onValueChange, value, ...props }) => {
    return (
        <MUIDateTimePicker
            mask="__-__-____ __:__"
            onChange={(date: unknown): void => {
                onValueChange?.(date);
            }}
            label={label}
            value={value}
            autoFocus={true}
            renderInput={(params): React.ReactElement => (
                <TextField placeholder={placeholder} name={name} {...props} {...params} />
            )}
        />
    );
};

export default DateTimePicker;
