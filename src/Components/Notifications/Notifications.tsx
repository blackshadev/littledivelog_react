import React, { useContext } from 'react';

import NotificationsContext from '../../Context/Notifications';
import { closeFlashMessage } from '../../Context/Notifications/actions';
import { NotificationsContainer, Overlay } from './components';
import Notification from './Notification';

export default function Notifications(): React.ReactElement {
    const [messageState, dispatch] = useContext(NotificationsContext);

    return (
        <Overlay aria-live="assertive">
            <NotificationsContainer>
                {messageState.messages.map((message) => (
                    <Notification
                        onClose={(): void => {
                            dispatch(closeFlashMessage(message));
                        }}
                        {...message}
                        key={message.key}
                    />
                ))}
            </NotificationsContainer>
        </Overlay>
    );
}
