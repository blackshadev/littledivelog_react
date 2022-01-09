import React, { useReducer } from 'react';

import createReducerContext from '../../../store/createReducerContext';
import formReducer from '../../../store/form/reducer';
import initialState from '../../../store/form/state';
import { ReactPropsWithChildren } from '../../../utils/ReactPropsWithChildern';

export const FormContext = createReducerContext(initialState);

export const FormContextProvider: React.FC<ReactPropsWithChildren> = ({
    children,
}) => {
    const [state, dispatch] = useReducer(formReducer, initialState);

    return (
        <FormContext.Provider value={{ dispatch, state }}>
            {children}
        </FormContext.Provider>
    );
};

export default FormContext;
