import { createReducer } from '@reduxjs/toolkit';

import { loggedIn, login, logOut } from './actions';
import { initialState } from './state';

export const authReducer = createReducer(initialState, (builder) =>
    builder
        .addCase(login, (_, action) => {
            console.log(action);
        })
        .addCase(loggedIn, (_, action) => {
            return { ...action.payload };
        })
        .addCase(logOut, () => {
            return {};
        }),
);
