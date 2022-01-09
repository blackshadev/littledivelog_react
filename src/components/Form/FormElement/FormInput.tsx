import React from 'react';

import Input from '../Input/Input';
import FormElement from './FormElement';

const FormInput: React.FC<
    React.ComponentProps<typeof Input> & { name: string; label: string }
> = ({ label, name, ...props }) => {
    return (
        <FormElement name={name} label={label}>
            <Input {...props} />
        </FormElement>
    );
};

export default FormInput;
