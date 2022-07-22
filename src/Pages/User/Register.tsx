import React from 'react';

import { useNavigate } from 'react-router-dom';

import * as api from '../../api/auth';
import { FieldsErrors } from '../../api/errors/FieldsError';
import RegisterForm from '../../Components/Forms/RegisterForm';
import { FormType } from '../../Components/Forms/RegisterForm/RegisterForm';
import useNotification from '../../Context/Notifications/useNotification';
import Notification from '../../Helpers/Notification';
import Route, { route } from '../../Routing/Routes';

export default function Register(): React.ReactElement {
    const navigate = useNavigate();
    const flashMessage = useNotification();
    async function doRegister(data: FormType): Promise<void> {
        if (data.password !== data.confirmPassword) {
            throw new FieldsErrors({
                password: ['Passwords does not match'],
            });
        }
        await api.register(data);
        flashMessage(Notification.success('Registration successful. You can now login.'));
        navigate(route(Route.Login));
    }

    return <RegisterForm onSubmit={doRegister} />;
}
