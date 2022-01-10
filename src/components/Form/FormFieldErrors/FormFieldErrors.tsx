import React, { useContext } from 'react';

import { getFieldsErrors } from '../../../store/form/selectors';
import ErrorList from '../ErrorList';
import FormContext from '../Form/FormContext';

const FormFieldErrors: React.FC<React.PropsWithChildren<{ name: string }>> = ({
    name,
}) => {
    const { state } = useContext(FormContext);
    const fieldsErrors = getFieldsErrors(state);

    const errors = fieldsErrors?.forField(name) ?? [];

    return <ErrorList errors={errors} />;
};

export default FormFieldErrors;
