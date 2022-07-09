import { createReducer } from '@reduxjs/toolkit';

import { toggleMenu } from './actions';
import { initialState } from './state';

export const appReducer = createReducer(initialState, (builder) =>
    builder.addCase(toggleMenu, (state) => {
        return { ...state, menu: { isCollapsed: !state.menu.isCollapsed } };
    }),
);
