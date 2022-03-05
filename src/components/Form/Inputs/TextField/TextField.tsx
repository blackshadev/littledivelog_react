import React from 'react';

import { OutlinedInput } from '@mui/material';

const TextField: React.FC<React.ComponentProps<typeof OutlinedInput>> = ({
    ...props
}) => {
    return <OutlinedInput {...props}></OutlinedInput>;
};

export default TextField;
