import React, { useReducer } from 'react';

import createReducerContext from '../../../store/createReducerContext';
import { setError } from '../../../store/form/actions';
import formReducer from '../../../store/form/reducer';
import initialState from '../../../store/form/state';
import { ReactPropsWithChildren } from '../../../utils/ReactPropsWithChildern';

export const FormContext = createReducerContext(initialState);

type AsyncChangeHandler = (ev: React.ChangeEvent) => Promise<void>;

export const FormContextProvider: React.FC<
    ReactPropsWithChildren<{ onChange?: AsyncChangeHandler }>
> = ({ children, onChange }) => {
    const [state, dispatch] = useReducer(formReducer, {
        ...initialState,
        onChangeHandler(event) {
            onChange?.(event).catch((err) => dispatch(setError(err)));
        },
    });

    return (
        <FormContext.Provider value={{ dispatch, state }}>
            {children}
        </FormContext.Provider>
    );
};

export default FormContext;
