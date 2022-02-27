import React, { useContext } from 'react';

import { useForm } from 'react-hook-form';

import * as api from '../api/auth';
import Button from '../components/Form/Button';
import Form from '../components/Form/Form';
import FormInput from '../components/Form/FormElement';
import { AuthContext } from '../context/auth/auth';
import * as authActions from '../store/auth/actions';

type FormType = { email: string; password: string };

const Login: React.FC = () => {
    const form = useForm<FormType>({
        defaultValues: {
            email: '',
            password: '',
        },
    });
    const { dispatch } = useContext(AuthContext);

    async function doSubmit({ email, password }: FormType): Promise<void> {
        console.log('login?');
        const login = await api.login({ email, password });
        dispatch(
            authActions.loggedIn({
                accessToken: login.access_token,
                refreshToken: login.refresh_token,
            }),
        );
    }

    return (
        <Form onSubmit={doSubmit} form={form}>
            <FormInput
                name="email"
                label="Email"
                placeholder="john@doe.com"
            ></FormInput>
            <FormInput
                name="password"
                label="Password"
                placeholder="Password"
                type="password"
            ></FormInput>
            <Button>Login</Button>
        </Form>
    );
};

export default Login;
