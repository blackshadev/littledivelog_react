import { createReducer } from '@reduxjs/toolkit';

import randomString from '../../Helpers/randomString';
import { closeFlashMessage, notify } from './actions';
import { initialState } from './state';

export const appReducer = createReducer(initialState, (builder) =>
    builder
        .addCase(notify, (state, action) => {
            const originalKey = action.payload.key;
            const message = { ...action.payload, key: randomString(16) };

            if (
                originalKey !== undefined &&
                state.messages.find((msg) => msg.key === originalKey) !== undefined
            ) {
                return state;
            }

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
                lastClosed: action.payload,
                messages: [...state.messages.slice(0, idx), ...state.messages.slice(idx + 1)],
            };
        }),
);
