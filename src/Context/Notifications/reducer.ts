import { createReducer } from '@reduxjs/toolkit';

import randomString from '../../Helpers/randomString';
import { closeFlashMessage, notify } from './actions';
import { initialState } from './state';

export const appReducer = createReducer(initialState, (builder) =>
    builder
        .addCase(notify, (state, action) => {
            const message = { key: randomString(16), ...action.payload };
            return {
                messages: [...state.messages, message],
            };
        })
        .addCase(closeFlashMessage, (state, action) => {
            const idx = state.messages.findIndex((message) => message.key === action.payload.key);
            if (idx === -1) {
                return state;
            }

            return {
                messages: [...state.messages.slice(0, idx), ...state.messages.slice(idx + 1)],
            };
        }),
);
