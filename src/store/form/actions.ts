import React from 'react';

import { createAction } from '@reduxjs/toolkit';

export const setError = createAction<Error>('setError');
export const triggerOnChange =
    createAction<React.ChangeEvent>('onChange.trigger');
