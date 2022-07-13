import React, { useContext } from 'react';

import { Controller, UseControllerProps } from 'react-hook-form';

import SubmitContext from '../../Form/SubmitContext';
import TextField from '../../Inputs/TextField';

type FormInputProps = React.ComponentProps<typeof TextField> & {
    name: string;
    label: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Input?: React.FC<any>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    defaultValue?: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    transformValue?: (val: any) => string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    validationRules?: UseControllerProps<any, any>['rules'];
};

export default function FormInput({
    Input,
    name,
    label,
    defaultValue,
    transformValue,
    validationRules,
    ...props
}: FormInputProps): React.ReactElement {
    const ChildInput = Input ?? TextField;
    const submitContext = useContext(SubmitContext);
    const transformer = transformValue ?? ((t): string => t);

    return (
        <Controller
            name={name}
            rules={validationRules}
            defaultValue={defaultValue}
            render={({ field }): React.ReactElement => (
                <ChildInput
                    onBlur={(event: React.FocusEvent<HTMLInputElement>, value?: unknown): void => {
                        value = value ?? event.target.value;
                        field.onChange(value);
                        field.onBlur();

                        if (value !== field.value) {
                            submitContext.blur();
                        }
                    }}
                    onValueChange={(value?: unknown): void => {
                        field.onChange(value);
                    }}
                    value={transformer(field.value ?? '')}
                    label={label}
                    name={name}
                    {...props}
                />
            )}
        />
    );
}
