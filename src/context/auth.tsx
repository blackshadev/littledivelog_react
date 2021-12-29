import React, { useReducer } from 'react';

import { authReducer } from '../store/auth/reducer';
import { initialState } from '../store/auth/state';
import createReducerContext from '../store/createReducerContext';

export const AuthContext = createReducerContext(initialState);

const AuthProvider: React.FC<{ children?: React.ReactNode | undefined }> = ({
    children,
}) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
