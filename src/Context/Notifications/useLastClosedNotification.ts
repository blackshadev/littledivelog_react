import { useContext } from 'react';

import { INotification } from '../../Helpers/Notification';
import { lastClosedNotification } from './selectors';
import NotificationsContext from '.';

export default function useLastClosedNotification(): INotification | undefined {
    const [state] = useContext(NotificationsContext);

    return lastClosedNotification(state);
}
