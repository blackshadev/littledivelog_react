import React from 'react';

import { CheckCircleOutline, Clear, ErrorOutlineOutlined, WarningAmberOutlined } from '@mui/icons-material';

import { FlashMessageType, INotification } from '../../Helpers/Notification';
import useTimeout from '../../Helpers/useTimeout';
import { NotificationActions, NotificationContainer, NotificationContent, NotificationIcon } from './components';

type Props = INotification & { timeout?: number; onClose(): void };

function IconByType({ type }: { type: FlashMessageType }): React.ReactElement {
    switch (type) {
        case FlashMessageType.Success:
            return <CheckCircleOutline />;
        case FlashMessageType.Warning:
            return <WarningAmberOutlined />;
        case FlashMessageType.Error:
            return <ErrorOutlineOutlined />;
    }
}

export default function Notification({ timeout, type, message, onClose }: Props): React.ReactElement {
    useTimeout(onClose, timeout);

    return (
        <NotificationContainer type={type}>
            <NotificationIcon>
                <IconByType type={type} />
            </NotificationIcon>
            <NotificationContent>
                <p>{message}</p>
            </NotificationContent>
            <NotificationActions>
                {!timeout && (
                    <button onClick={(): void => onClose()}>
                        <Clear />
                    </button>
                )}
            </NotificationActions>
        </NotificationContainer>
    );
}
