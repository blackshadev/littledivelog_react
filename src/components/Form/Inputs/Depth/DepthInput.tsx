import React, { useEffect, useState } from 'react';

import formatDepth, {
    parseFormattedDepth,
} from '../../../../formatters/formatDepth';
import Input from '../Input';

type CustomInputProps<T> = {
    value: T;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>, value: T) => void;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>, value: T) => void;
};

const DepthInput: React.FC<
    React.ComponentProps<typeof Input> & CustomInputProps<number>
> = ({ value, onBlur, onChange, ...props }) => {
    const [depth, setDepth] = useState<number>(value);
    const [formattedDepth, setFormattedDepth] = useState<string>('');

    useEffect(() => {
        setFormattedDepth(formatDepth(depth));
    }, [depth]);

    return (
        <Input
            value={formattedDepth}
            onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
                setFormattedDepth(event.target.value);
                onChange?.(event, depth);
            }}
            onBlur={(event: React.FocusEvent<HTMLInputElement>): void => {
                const depth = parseFormattedDepth(formattedDepth);
                setDepth(depth);
                onBlur?.(event, depth);
            }}
            {...props}
        ></Input>
    );
};

export default DepthInput;
