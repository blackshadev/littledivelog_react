import { useContext } from 'react';

import Notification from '../../Helpers/Notification';
import { notify } from './actions';
import NotificationsContext from '.';

type FlashFunction = (message: Notification) => void;

export default function useNotification(): FlashFunction {
    const [, dispatch] = useContext(NotificationsContext);

    return (message: Notification): void => {
        dispatch(notify(message));
    };
}
