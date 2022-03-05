import React, { useEffect, useReducer, useState } from 'react';

import * as actions from '../../Store/Auth/actions';
import { authReducer } from '../../Store/Auth/reducer';
import { initialState } from '../../Store/Auth/state';
import createReducerContext from '../../Store/createReducerContext';

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
