import { createAction } from '@reduxjs/toolkit';

import { AuthContextType } from './state';

export const loggedIn =
    createAction<{ accessToken: string; refreshToken: string }>('LOGGED_IN');
export const logOut = createAction<void>('LOG_OUT');
export const load = createAction<AuthContextType>('LOAD');
