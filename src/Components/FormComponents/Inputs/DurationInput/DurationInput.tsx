import React, { useEffect, useState } from 'react';

import formatDivetime, { parseDivetime } from '../../../../Helpers/Formatters/formatDiveTime';
import TextField from '../TextField';

type CustomInputProps<T> = {
    value: T;
    label: string;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>, value: T) => void;
    onValueChange(value: T): void;
};

const DurationInput: React.FC<
    React.ComponentProps<typeof TextField> & CustomInputProps<number>
    // eslint-disable-next-line react/prop-types
> = ({ value, onBlur, onValueChange, ...props }) => {
    const [diveTime, setDivetime] = useState<number>(value);
    const [formattedDiveTime, setFormattedDivetime] = useState<string>('');

    useEffect(() => {
        setFormattedDivetime(formatDivetime(diveTime));
    }, [diveTime]);

    return (
        <TextField
            value={formattedDiveTime}
            onValueChange={(value: string): void => {
                setFormattedDivetime(value);
                onValueChange?.(diveTime);
            }}
            onBlur={(event: React.FocusEvent<HTMLInputElement>): void => {
                const dt = parseDivetime(formattedDiveTime);
                setDivetime(dt);
                onBlur?.(event, dt);
            }}
            {...props}
        ></TextField>
    );
};

export default DurationInput;
