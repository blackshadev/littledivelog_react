import React from 'react';

import * as api from '../../api/profile';
import ChangePasswordForm from '../../Components/Forms/UserForms/ChangePasswordForm/ChangePasswordForm';
import { useApiCall } from '../../Context/Auth/callApi';
import useNotification from '../../Context/Notifications/useNotification';
import Notification from '../../Helpers/Notification';

export function ChangePassword(): React.ReactElement {
    const changePassword = useApiCall(api.changePassword);
    const notify = useNotification();

    return (
        <ChangePasswordForm
            onUpdate={async (values): Promise<void> => {
                await changePassword(values);
                notify(Notification.success('Password changed successfully').time());
            }}
        />
    );
}
