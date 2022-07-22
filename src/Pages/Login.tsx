import React, { useContext } from 'react';

import { buttonClasses, Container } from '@mui/material';
import { styled } from '@mui/system';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import * as api from '../api/auth';
import Button from '../Components/FormComponents/Button';
import Form from '../Components/FormComponents/Form';
import FormInput from '../Components/FormComponents/FormElements/FormInput';
import HorizontalLayout from '../Components/FormComponents/FormLayout/HorizontalLayout';
import VerticalLayout from '../Components/FormComponents/FormLayout/VerticalLayout';
import TextField from '../Components/FormComponents/Inputs/TextField';
import { AuthContext } from '../Context/Auth/auth';
import Route, { route } from '../Routing/Routes';
import * as authActions from '../Store/Auth/actions';
import spacing from '../Styling/Constants/spacing';

type FormType = { email: string; password: string };

const StyledContainer = styled(Container)`
    .${buttonClasses.root} {
        margin-right: ${spacing.md};
    }

    .buttons {
        align-items: center;
    }
`;

const Login: React.FC = () => {
    const form = useForm<FormType>({
        defaultValues: {
            email: '',
            password: '',
        },
    });
    const [, dispatch] = useContext(AuthContext);

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
        <StyledContainer>
            <Form onSubmit={doSubmit} form={form}>
                <VerticalLayout>
                    <FormInput name="email" label="Email" placeholder="john@doe.com" Input={TextField}></FormInput>
                    <FormInput
                        name="password"
                        label="Password"
                        placeholder="Password"
                        type="password"
                        Input={TextField}
                    ></FormInput>

                    <HorizontalLayout className="buttons">
                        <Button variant="contained" type="submit">
                            Login
                        </Button>
                        <Link to={route(Route.Register)}>Register</Link>
                    </HorizontalLayout>
                </VerticalLayout>
            </Form>
        </StyledContainer>
    );
};

export default Login;
