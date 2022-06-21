import React, { useEffect, useState } from 'react';

import formatDepth, { parseFormattedDepth } from '../../../../Helpers/Formatters/formatDepth';
import TextField from '../TextField';

type CustomInputProps<T> = {
    value: T;
    onValueChange?: (value: T) => void;
    onBlur?: React.FocusEventHandler;
};

const DepthInput: React.FC<React.ComponentProps<typeof TextField> & CustomInputProps<number | null>> = ({
    value,
    onValueChange,
    onBlur,
    ...props
}) => {
    if (typeof value === 'string') {
        value = null;
    }
    const [depth, setDepth] = useState<number | null>(value);
    const [formattedDepth, setFormattedDepth] = useState<string>('');

    useEffect(() => {
        setFormattedDepth(formatDepth(depth));
    }, [depth]);

    return (
        <TextField
            value={formattedDepth}
            onValueChange={(value: string): void => {
                setFormattedDepth(value);
                onValueChange?.(depth);
            }}
            onBlur={(event: React.FocusEvent<HTMLInputElement>): void => {
                const depth = parseFormattedDepth(formattedDepth);
                setDepth(depth);
                onValueChange?.(depth);
                onBlur?.(event);
            }}
            {...props}
        ></TextField>
    );
};

export default DepthInput;
