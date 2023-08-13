import React from 'react';

import { DateTimePicker as MUIDateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';

import TextField from '../TextField';

type FormInputProps = React.ComponentProps<typeof TextField> & {
    name: string;
    label: string;
    placeholder: string;
    value: string|Date;
    onValueChange(value: unknown): void;
};

const DateTimePicker: React.FC<FormInputProps> = ({ name, label, placeholder, onValueChange, value, ...props }) => {
    return (
        <MUIDateTimePicker
            ampm={false}
            format='DD-MM-YYYY HH:mm'
            onChange={(date: unknown): void => {
                if (dayjs.isDayjs(date)) {
                    date = date.format("YYYY-MM-DDTHH:mm");
                }

                onValueChange?.(date);
            }}
            label={label}
            value={dayjs(value, ['YYYY-MM-DDThh:mm:ss', 'YYYY-MM-DDThh:mm'])}
            autoFocus={true}
            slots={{
                textField: (params): React.ReactElement => (
                    <TextField placeholder={placeholder} name={name} {...props} {...params} />
                ),
            }}
        />
    );
};

export default DateTimePicker;
