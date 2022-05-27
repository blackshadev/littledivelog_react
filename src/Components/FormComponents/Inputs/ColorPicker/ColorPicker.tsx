import React from 'react';

import Palette from '@mui/icons-material/Palette';
import { IconButton, InputAdornment, Popover } from '@mui/material';
import { ColorResult, TwitterPicker } from 'react-color';

import TextField from '../TextField';

type CustomProps = {
    value: string;
    name: string;
    onValueChange?: (value: string) => void;
    onChange?: React.ChangeEventHandler;
};

const ColorPicker: React.FC<CustomProps & React.ComponentProps<typeof TextField>> = ({
    onValueChange,
    onChange,
    value,
    ...props
}) => {
    const element = React.useRef<HTMLDivElement>(null);
    const [open, setOpen] = React.useState<boolean>(false);

    return (
        <>
            <TextField
                ref={element}
                value={value}
                onValueChange={onValueChange}
                onChange={onChange}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <IconButton
                                aria-label="Choose color"
                                onClick={(): void => setOpen(!open)}
                                sx={{ color: value }}
                            >
                                <Palette />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
                {...props}
            />
            <Popover
                open={open}
                anchorEl={element.current}
                onClose={(): void => {
                    console.log('here');
                    setOpen(false);
                }}
                anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
            >
                <TwitterPicker
                    color={value}
                    onChange={(color: ColorResult, event: React.ChangeEvent<HTMLInputElement>): void => {
                        onValueChange?.(color.hex);
                        onChange?.(event);
                    }}
                    onChangeComplete={(color: ColorResult, event: React.ChangeEvent<HTMLInputElement>): void => {
                        onValueChange?.(color.hex);
                        onChange?.(event);
                    }}
                />
            </Popover>
        </>
    );
};

export default ColorPicker;
