import React from 'react';

import ErrorList from '../ErrorList';

const FormErrors: React.FC<{ formError: Error | undefined }> = ({
    formError,
}) => {
    const errors = formError ? [formError.message] : [];

    return <ErrorList errors={errors} />;
};

export default FormErrors;
