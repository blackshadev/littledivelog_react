import { createSelector } from '@reduxjs/toolkit';

import { Role } from './roles';
import { AuthContextType } from './state';

export const defaultSelector = (s: AuthContextType): AuthContextType => s;

export const isLoggedIn = createSelector(defaultSelector, (state) => !!state.refreshToken);

export const getAccessToken = createSelector(defaultSelector, (state) => state.accessToken);

export const getRole = createSelector(defaultSelector, (state) => (!!state.refreshToken ? Role.User : Role.Guest));
