import React from 'react';

import { ChipWithTextColor } from './components';

type Props = {
    color: string;
    label: string;
};

const Tag: React.FC<Props> = ({ color, label }) => {
    return <ChipWithTextColor label={label} backgroundColor={color} />;
};

export default Tag;
