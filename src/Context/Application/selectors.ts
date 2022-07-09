import { createSelector } from '@reduxjs/toolkit';

import { ApplicationContextType } from './state';

export const defaultSelector = (s: ApplicationContextType): ApplicationContextType => s;

export const getMenuIsCollapsed = createSelector(defaultSelector, (state) => state.menu.isCollapsed);
