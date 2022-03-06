import React, { createContext, useCallback } from 'react';

import { useFormState } from 'react-hook-form';

import { ReactPropsWithChildren } from '../../../Helpers/ReactPropsWithChildern';

export const SubmitContext = createContext({
    blur(): void {
        /** noop */
    },
    submit(): void {
        /** noop */
    },
});

export const SubmitContextProvider: React.FC<
    ReactPropsWithChildren<{
        onSubmit: () => void;
        submitOnBlur: boolean;
    }>
> = ({ submitOnBlur, children, onSubmit }) => {
    const submit = useCallback(() => {
        onSubmit();
    }, [onSubmit]);

    const blur = useCallback(() => {
        if (submitOnBlur) {
            submit();
        }
    }, [submit, submitOnBlur]);

    return (
        <SubmitContext.Provider value={{ blur, submit }}>
            {children}
        </SubmitContext.Provider>
    );
};

export default SubmitContext;