import React from 'react';

import { Button as MUIButton } from '@mui/material';

const Button: React.FC<React.ComponentProps<typeof MUIButton>> = ({ ...props }) => {
    return <MUIButton {...props}></MUIButton>;
};

export default Button;
