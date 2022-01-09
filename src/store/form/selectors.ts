import { createSelector } from '@reduxjs/toolkit';

import { FieldsErrors } from '../../api/errors/FieldsError';
import type { FormContextState } from './state';

export const defaultSelector = (s: FormContextState): FormContextState => s;

export const getFieldsErrors = createSelector(defaultSelector, (state) =>
    state.error instanceof FieldsErrors ? state.error : undefined,
);
export const getFormErrors = createSelector(defaultSelector, (state) =>
    state.error && !(state.error instanceof FieldsErrors)
        ? state.error
        : undefined,
);
