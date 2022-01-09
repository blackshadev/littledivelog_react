import { createAction } from '@reduxjs/toolkit';

export const setError = createAction<Error>('setError');
