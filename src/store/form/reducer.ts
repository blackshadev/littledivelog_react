import { createReducer } from '@reduxjs/toolkit';

import { setError, triggerOnChange } from './actions';
import initialState from './state';

const formReducer = createReducer(initialState, (builder) =>
    builder
        .addCase(setError, (state, action) => {
            return { ...state, error: action.payload };
        })
        .addCase(triggerOnChange, (state, action) => {
            state.onChangeHandler(action.payload);
        }),
);

export default formReducer;
