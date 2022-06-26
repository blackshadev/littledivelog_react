import React, { FC, useState } from 'react';

import { FieldValues, FormProvider, Path, useFormContext, UseFormReturn } from 'react-hook-form';

import { FieldsErrors } from '../../../api/errors/FieldsError';
import FormErrors from '../FormErrors';
import { StyledForm } from './components';
import { SubmitContextProvider } from './SubmitContext';

type AsyncFormHandler<T extends FieldValues> = (data: T) => Promise<void>;

const InnerForm: (args: {
    children: React.ReactNode;
    submitOnBlur: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onSubmit: AsyncFormHandler<any>;
}) => ReturnType<FC> = <T extends FieldValues>({
    children,
    submitOnBlur,
    onSubmit,
}: {
    children: React.ReactNode;
    submitOnBlur: boolean;
    onSubmit: AsyncFormHandler<T>;
}) => {
    const [formError, setFormError] = useState<Error>();
    const { handleSubmit, setError } = useFormContext<T>();

    async function handleSubmitError(data: T): Promise<void> {
        try {
            await onSubmit(data);
        } catch (err: unknown) {
            if (err instanceof FieldsErrors) {
                for (const fieldError of err.fields()) {
                    setError(fieldError.field as Path<T>, {
                        message: fieldError.message,
                        type: 'serverError',
                    });
                }
            } else if (err instanceof Error) {
                setFormError(err);
            }
        }
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const submitHandler = handleSubmit(handleSubmitError as any);
    return (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        <SubmitContextProvider submitOnBlur={submitOnBlur} onSubmit={submitHandler}>
            <StyledForm onSubmit={submitHandler}>
                {children}
                <FormErrors formError={formError} />
            </StyledForm>
        </SubmitContextProvider>
    );
};

const Form: <T extends FieldValues>(args: {
    children: React.ReactNode;
    submitOnBlur?: boolean;
    onSubmit: AsyncFormHandler<T>;
    form: UseFormReturn<T>;
}) => ReturnType<FC> = ({ children, submitOnBlur, onSubmit, form }) => {
    return (
        <FormProvider {...form}>
            <InnerForm submitOnBlur={submitOnBlur ?? false} onSubmit={onSubmit}>
                {children}
            </InnerForm>
        </FormProvider>
    );
};

export default Form;
