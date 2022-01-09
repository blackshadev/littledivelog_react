import { createReducer } from '@reduxjs/toolkit';

import { load, loggedIn, logOut } from './actions';
import { initialState } from './state';

export const authReducer = createReducer(initialState, (builder) =>
    builder
        .addCase(loggedIn, (_, action) => {
            return { ...action.payload };
        })
        .addCase(load, (_, action) => {
            return { ...action.payload };
        })
        .addCase(logOut, () => {
            return {};
        }),
);
