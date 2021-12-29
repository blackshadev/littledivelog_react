import { createSelector } from '@reduxjs/toolkit';

import { AuthContextType } from './state';

export const defaultSelector = (s: AuthContextType) => s;

export const isLoggedIn = createSelector(
    defaultSelector,
    (state) => !!state.refreshToken,
);
