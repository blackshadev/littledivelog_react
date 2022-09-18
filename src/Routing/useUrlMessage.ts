import { createSearchParams, useSearchParams } from 'react-router-dom';

import Notification from '../Helpers/Notification';

export default function useUrlMessage(): [Notification | undefined, () => void] {
    const [searchParams, setSearchParams] = useSearchParams();

    const message = searchParams.get('message');

    return [
        message !== null ? Notification.success(message).withPredefinedMessage(message) : undefined,
        (): void => {
            const newSearchParams = createSearchParams(searchParams);
            newSearchParams.delete('message');
            setSearchParams(newSearchParams);
        },
    ];
}
