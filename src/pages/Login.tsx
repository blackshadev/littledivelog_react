import React, { useContext, useState } from 'react';

import * as api from '../api/auth';
import Button from '../components/Form/Button';
import Form from '../components/Form/Form';
import FormInput from '../components/Form/FormElement';
import { AuthContext } from '../context/auth/auth';
import * as authActions from '../store/auth/actions';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { dispatch } = useContext(AuthContext);

    async function handleSubmit(): Promise<void> {
        const login = await api.login({ email, password });
        dispatch(
            authActions.loggedIn({
                accessToken: login.access_token,
                refreshToken: login.refresh_token,
            }),
        );
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormInput
                name="email"
                label="Email"
                placeholder="john@doe.com"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                    setEmail(e.target.value)
                }
            ></FormInput>
            <FormInput
                name="password"
                label="Password"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                    setPassword(e.target.value)
                }
            ></FormInput>
            <Button>Login</Button>
        </Form>
    );
};

export default Login;
