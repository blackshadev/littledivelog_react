import { createAction } from '@reduxjs/toolkit';

import { INotification } from '../../Helpers/Notification';
import { Message } from './state';

export const notify = createAction<INotification>('FLASH_MESSAGE');
export const closeFlashMessage = createAction<Message>('FLASH_MESSAGE_CLOSE');
