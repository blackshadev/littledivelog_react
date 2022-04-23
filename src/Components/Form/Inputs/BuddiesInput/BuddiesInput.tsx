import React from 'react';

import { DiveBuddy } from '../../../../api/types/dives/DiveBuddy';
import BuddySearch from './BuddySearch';

type BuddyInputArgs = {
    name: string;
    value: DiveBuddy[];
    placeholder: string;
    label: string;
    onValueChange(value: null | DiveBuddy[]): void;
};

const BuddiesInput: React.FC<BuddyInputArgs> = ({ ...props }) => {
    return <BuddySearch {...props} />;
};

export default BuddiesInput;
