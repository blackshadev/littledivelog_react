import styled from 'styled-components';

import { FlashMessageType } from '../../Helpers/Notification';
import colors from '../../Styling/Constants/colors';
import misc from '../../Styling/Constants/misc';
import spacing from '../../Styling/Constants/spacing';

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    pointer-events: none;
    padding: ${spacing.lg};
    display: flex;
    align-items: flex-end;
`;

export const NotificationsContainer = styled.div`
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const NotificationContainer = styled.div<{ type: FlashMessageType }>`
    pointer-events: auto;
    background-color: ${({ type }): string => {
        switch (type) {
            case FlashMessageType.Success:
                return colors.success;
            case FlashMessageType.Warning:
                return colors.warning;
            case FlashMessageType.Error:
                return colors.error;
        }
    }};
    border-radius: ${misc.roundedBorders};
    margin-bottom: ${spacing.md};
    padding: ${spacing.sm};
    box-shadow: ${misc.shadow};
    display: flex;
    color: ${colors.background};
`;

export const NotificationIcon = styled.div`
    align-self: center;
    margin-right: ${spacing.md};
`;
export const NotificationContent = styled.div`
    flex-grow: 1;
    margin-right: ${spacing.md};
    display: flex;
    align-items: center;
`;
export const NotificationActions = styled.div`
    button {
        color: ${colors.background};
        border: 0;
        background: transparent;
        cursor: pointer;
    }

    align-self: flex-start;
`;
