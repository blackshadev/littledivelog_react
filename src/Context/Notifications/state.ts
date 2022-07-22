import { INotification } from '../../Helpers/Notification';

export type Message = INotification & { key: string };

export type FlashMessagesContextType = {
    messages: Message[];
};

export const initialState: FlashMessagesContextType = {
    messages: [],
};
