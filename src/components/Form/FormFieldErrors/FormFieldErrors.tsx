import React from 'react';

import { FieldError, get, useFormContext } from 'react-hook-form';

import ErrorList from '../ErrorList';

const FormFieldErrors: React.FC<React.PropsWithChildren<{ name: string }>> = ({
    name,
}) => {
    const { formState } = useFormContext();
    const fieldError = get(formState.errors, name) as FieldError | undefined;

    const errors = fieldError?.message ? [fieldError.message] : [];
    return <ErrorList errors={errors} />;
};

export default FormFieldErrors;
