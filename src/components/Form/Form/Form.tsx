import React, { useContext } from 'react';

import { setError } from '../../../store/form/actions';
import { getFormErrors } from '../../../store/form/selectors';
import FormErrors from '../FormErrors';
import FormContext, { FormContextProvider } from './FormContext';

type AsyncFormHandler = (ev: React.FormEvent) => Promise<void>;

const InnerForm: React.FC<
    React.PropsWithChildren<{
        onSubmit: AsyncFormHandler;
    }>
> = ({ children, onSubmit }) => {
    const { state, dispatch } = useContext(FormContext);
    const formError = getFormErrors(state);

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
            {formError && <FormErrors errors={[formError.message]} />}
        </form>
    );
};

const Form: React.FC<
    React.PropsWithChildren<{ onSubmit: AsyncFormHandler }>
> = ({ children, onSubmit }) => {
    return (
        <FormContextProvider>
            <InnerForm onSubmit={onSubmit}>{children}</InnerForm>
        </FormContextProvider>
    );
};

export default Form;
