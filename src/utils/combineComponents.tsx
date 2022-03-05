import React from 'react';

import { ReactPropsWithChildren } from './ReactPropsWithChildern';

const combineComponents = (...components: React.FC[]): React.FC => {
    const x: React.FC<ReactPropsWithChildren> = ({ children }) =>
        components.reduce(
            (tree, CurrentComponent) => (
                <CurrentComponent>{tree}</CurrentComponent>
            ),
            children,
        ) as React.ReactElement;

    return x;
};

export default combineComponents;
