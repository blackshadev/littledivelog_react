import React from 'react';

import { ErrorItem, ErrorListContainer } from './components';

const ErrorList: React.FC<{ errors: string[] }> = ({ errors }) => {
    if (!errors.length) {
        return <></>;
    }

    return (
        <ErrorListContainer>
            {errors.map((e) => (
                <ErrorItem key={e}>{e}</ErrorItem>
            ))}
        </ErrorListContainer>
    );
};

export default ErrorList;
