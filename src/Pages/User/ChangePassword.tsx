import React from 'react';

import * as api from '../../api/profile';
import ChangePasswordForm from '../../Components/Forms/UserForms/ChangePasswordForm/ChangePasswordForm';
import { useApiCall } from '../../Context/Auth/callApi';

export function ChangePassword(): React.ReactElement {
    const changePassword = useApiCall(api.changePassword);

    return (
        <ChangePasswordForm
            onUpdate={async (values): Promise<void> => {
                await changePassword(values);
            }}
        />
    );
}
