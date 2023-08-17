import React from 'react';

const joinComponents =
    (...components: React.ExoticComponent[]): React.FC =>
    // eslint-disable-next-line react/display-name
    (): React.ReactElement => (
        <>
            {components.map((Comp, iX) => (
                <Comp key={iX} />
            ))}
        </>
    );
export default joinComponents;
