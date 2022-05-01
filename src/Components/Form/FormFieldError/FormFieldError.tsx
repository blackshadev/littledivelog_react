import React from 'react';

const FormFieldError: React.FC<{ error?: string }> = ({ error }) => {
    return <>{error ?? ''}</>;
};

export default FormFieldError;
