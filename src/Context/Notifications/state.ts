import { INotification } from '../../Helpers/Notification';

export type Message = INotification & { key: string };

export type FlashMessagesContextType = {
    messages: Message[];
    lastClosed?: Message;
};

export const initialState: FlashMessagesContextType = {
    lastClosed: undefined,
    messages: [] as Message[],
};
