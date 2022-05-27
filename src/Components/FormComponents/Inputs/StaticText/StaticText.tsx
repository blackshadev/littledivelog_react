import React from 'react';

import TextField from '../TextField';

const StaticText: React.FC<React.ComponentProps<typeof TextField>> = (props) => {
    return <TextField {...props} disabled />;
};

export default StaticText;
