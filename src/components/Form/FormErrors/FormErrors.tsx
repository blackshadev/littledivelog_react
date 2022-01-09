import React from 'react';

import { ErrorItem, ErrorList } from './components';

const FormErrors: React.FC<{ errors: string[] }> = ({ errors }) => {
    if (!errors.length) {
        return <></>;
    }

    return (
        <ErrorList>
            {errors.map((e) => (
                <ErrorItem key={e}>{e}</ErrorItem>
            ))}
        </ErrorList>
    );
};

export default FormErrors;
