import React, { useEffect, useReducer, useState } from 'react';

import { authReducer } from '../../Store/Auth/reducer';
import { initialState } from '../../Store/Auth/state';
import createReducerContext from '../../Store/createReducerContext';

export const AuthContext = createReducerContext(initialState);
AuthContext.displayName = 'AuthContext';

function safeParseJson<T>(str: unknown): undefined | T {
    if (typeof str !== 'string') {
        return undefined;
    }

    try {
        return JSON.parse(str);
    } catch (e) {
        return undefined;
    }
}

const AuthProvider: React.FC<{ children?: React.ReactNode | undefined }> = ({ children }) => {
    const authStr = localStorage.getItem('auth');
    const startingState = safeParseJson<typeof initialState>(authStr) ?? initialState;

    const [state, dispatch] = useReducer(authReducer, startingState);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    useEffect(() => {
        if (!loaded) {
            return;
        }
        localStorage.setItem('auth', JSON.stringify(state));
    }, [state, loaded]);

    return <AuthContext.Provider value={[state, dispatch]}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
