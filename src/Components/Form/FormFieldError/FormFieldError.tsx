import React from 'react';

import { FormHelperText } from '@mui/material';

const FormFieldError: React.FC<{ error?: string }> = ({ error }) => {
    return <FormHelperText>{error ?? ' '}</FormHelperText>;
};

export default FormFieldError;
