import React, { createContext, Dispatch } from 'react';

import { AnyAction } from '@reduxjs/toolkit';

export default function createReducerContext<T>(
    initialState: T,
): React.Context<{
    dispatch: Dispatch<AnyAction>;
    state: T;
}> {
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
