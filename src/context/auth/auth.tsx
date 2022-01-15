import React, { useEffect, useReducer, useState } from 'react';

import * as actions from '../../store/auth/actions';
import { authReducer } from '../../store/auth/reducer';
import { initialState } from '../../store/auth/state';
import createReducerContext from '../../store/createReducerContext';

export const AuthContext = createReducerContext(initialState);
AuthContext.displayName = 'AuthContext';

const AuthProvider: React.FC<{ children?: React.ReactNode | undefined }> = ({
    children,
}) => {
    const [state, dispatch] = useReducer(authReducer, initialState);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const authStr = localStorage.getItem('auth');
        if (authStr) {
            dispatch(actions.load(JSON.parse(authStr)));
        } else {
            dispatch(actions.load({}));
        }
        setLoaded(true);
    }, []);

    useEffect(() => {
        if (!loaded) {
            return;
        }
        localStorage.setItem('auth', JSON.stringify(state));
    }, [state, loaded]);

    return (
        <AuthContext.Provider value={{ dispatch, state }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
