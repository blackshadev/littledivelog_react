import React, { useEffect, useState } from 'react';

import formatDivetime, {
    parseDivetime,
} from '../../../../formatters/formatDiveTime';
import Input from '../Input';

type CustomInputProps<T> = {
    value: T;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>, value: T) => void;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>, value: T) => void;
};

const DurationInput: React.FC<
    React.ComponentProps<typeof Input> & CustomInputProps<number>
> = ({ value, onBlur, onChange, ...props }) => {
    const [diveTime, setDivetime] = useState<number>(value);
    const [formattedDiveTime, setFormattedDivetime] = useState<string>('');

    useEffect(() => {
        setFormattedDivetime(formatDivetime(diveTime));
    }, [diveTime]);

    return (
        <Input
            value={formattedDiveTime}
            onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
                setFormattedDivetime(event.target.value);
                onChange?.(event, diveTime);
            }}
            onBlur={(event: React.FocusEvent<HTMLInputElement>): void => {
                const dt = parseDivetime(formattedDiveTime);
                setDivetime(dt);
                onBlur?.(event, dt);
            }}
            {...props}
        ></Input>
    );
};

export default DurationInput;
