import { createAction } from '@reduxjs/toolkit';

export const login =
    createAction<{ email: string; password: string }>('LOG_IN');
export const loggedIn =
    createAction<{ user: string; accessToken: string; refreshToken: string }>(
        'LOGGED_IN',
    );
export const logOut = createAction<void>('LOG_OUT');
