import React, { useContext } from 'react';

import { getFormErrors } from '../../../store/form/selectors';
import ErrorList from '../ErrorList';
import FormContext from '../Form/FormContext';

const FormErrors: React.FC = () => {
    const { state } = useContext(FormContext);
    const formError = getFormErrors(state);

    const errors = formError ? [formError.message] : [];

    return <ErrorList errors={errors} />;
};

export default FormErrors;
