import { createContext, Dispatch } from 'react';

import { AnyAction } from '@reduxjs/toolkit';

export default function createReducerContext<T>(initialState: T) {
    return createContext<{
        dispatch: Dispatch<AnyAction>;
        state: T;
    }>({
        dispatch() {
            /**/
        },
        state: initialState,
    });
}
