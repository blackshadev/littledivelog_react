import { createReducer } from '@reduxjs/toolkit';

import { setError } from './actions';
import initialState from './state';

const formReducer = createReducer(initialState, (builder) =>
    builder.addCase(setError, (state, action) => {
        return { error: action.payload };
    }),
);

export default formReducer;
