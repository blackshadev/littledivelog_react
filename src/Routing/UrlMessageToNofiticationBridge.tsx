import { useEffect } from 'react';

import useLastClosedNotification from '../Context/Notifications/useLastClosedNotification';
import useNotification from '../Context/Notifications/useNotification';
import useUrlMessage from './useUrlMessage';

export function UrlMessageToNofiticationBridge(): null {
    const [message, clearMessage] = useUrlMessage();
    const lastClosed = useLastClosedNotification();
    const notify = useNotification();

    useEffect(() => {
        if (message === undefined || lastClosed?.key !== message?.key) {
            return;
        }

        clearMessage();
    }, [message, clearMessage, lastClosed]);

    useEffect(() => {
        if (!message) {
            return;
        }
        if (lastClosed !== undefined && lastClosed.key && lastClosed.key === message.key) {
            return;
        }

        notify(message);
    }, [message, notify, lastClosed]);

    return null;
}
