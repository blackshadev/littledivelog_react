import React from 'react';

import { ReactPropsWithChildren } from '../ReactPropsWithChildern';

const combineComponents = (...components: React.FC<ReactPropsWithChildren>[]): React.FC<ReactPropsWithChildren> => {
    const x: React.FC<ReactPropsWithChildren> = ({ children }) =>
        components
            .reverse()
            .reduce(
                (tree, CurrentComponent) => <CurrentComponent>{tree}</CurrentComponent>,
                children,
            ) as React.ReactElement;

    return x;
};

export default combineComponents;
