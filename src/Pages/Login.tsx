import React, { useContext } from 'react';

import { Container } from '@mui/material';
import { useForm } from 'react-hook-form';

import * as api from '../api/auth';
import Button from '../Components/Form/Button';
import Form from '../Components/Form/Form';
import FormInput from '../Components/Form/FormElements/FormInput';
import HorizontalLayout from '../Components/Form/FormLayout/HorizontalLayout';
import TextField from '../Components/Form/Inputs/TextField';
import { AuthContext } from '../Context/Auth/auth';
import * as authActions from '../Store/Auth/actions';

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
        const login = await api.login({ email, password });
        dispatch(
            authActions.loggedIn({
                accessToken: login.access_token,
                refreshToken: login.refresh_token,
            }),
        );
    }

    return (
        <Container>
            <Form onSubmit={doSubmit} form={form}>
                <HorizontalLayout>
                    <FormInput
                        name="email"
                        label="Email"
                        placeholder="john@doe.com"
                        Input={TextField}
                    ></FormInput>
                    <FormInput
                        name="password"
                        label="Password"
                        placeholder="Password"
                        type="password"
                        Input={TextField}
                    ></FormInput>
                    <Button variant="contained" type="submit">
                        Login
                    </Button>
                </HorizontalLayout>
            </Form>
        </Container>
    );
};

export default Login;