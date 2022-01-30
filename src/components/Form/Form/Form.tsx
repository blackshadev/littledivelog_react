import React, { useContext } from 'react';

import { setError } from '../../../store/form/actions';
import FormErrors from '../FormErrors';
import FormContext, { FormContextProvider } from './FormContext';

type AsyncFormHandler = (ev: React.FormEvent) => Promise<void>;
type AsyncChangeHandler = (ev: React.ChangeEvent) => Promise<void>;

const InnerForm: React.FC<
    React.PropsWithChildren<{
        onSubmit: AsyncFormHandler;
    }>
> = ({ children, onSubmit }) => {
    const { dispatch } = useContext(FormContext);

    function submitHandler(event: React.FormEvent): void {
        event.preventDefault();
        onSubmit(event).catch((err) => {
            if (!(err instanceof Error)) {
                throw err;
            }
            dispatch(setError(err));
        });
    }

    return (
        <form onSubmit={submitHandler}>
            {children}
            <FormErrors />
        </form>
    );
};

const Form: React.FC<
    React.PropsWithChildren<{
        onSubmit: AsyncFormHandler;
        onChange?: AsyncChangeHandler;
    }>
> = ({ children, onSubmit, onChange }) => {
    return (
        <FormContextProvider onChange={onChange}>
            <InnerForm onSubmit={onSubmit}>{children}</InnerForm>
        </FormContextProvider>
    );
};

export default Form;
