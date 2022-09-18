import { createSelector } from '@reduxjs/toolkit';

import { FlashMessagesContextType } from './state';

export const defaultSelector = (s: FlashMessagesContextType): FlashMessagesContextType => s;

export const getMessages = createSelector(defaultSelector, (state) => state.messages);

export const lastClosedNotification = createSelector(defaultSelector, (state) => state.lastClosed);
