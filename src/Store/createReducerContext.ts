import React, { createContext, Dispatch } from 'react';

import { AnyAction } from '@reduxjs/toolkit';

export default function createReducerContext<T>(initialState: T): React.Context<[T, Dispatch<AnyAction>]> {
    return createContext<[T, Dispatch<AnyAction>]>([
        initialState as T,
        (): void => {
            /**/
        },
    ]);
}
