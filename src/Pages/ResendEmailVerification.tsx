import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import * as api from '../api/auth';
import Form from '../Components/FormComponents/Form';
import FormInput from '../Components/FormComponents/FormElements/FormInput';
import FormText from '../Components/FormComponents/FormElements/FormText';
import HorizontalLayout from '../Components/FormComponents/FormLayout/HorizontalLayout';
import VerticalLayout from '../Components/FormComponents/FormLayout/VerticalLayout';
import TextField from '../Components/FormComponents/Inputs/TextField';
import useNotification from '../Context/Notifications/useNotification';
import Notification from '../Helpers/Notification';
import Route, { route } from '../Routing/Routes';

export default function ResendEmailVerification(): React.ReactElement {
    const form = useForm<{ email: string }>({
        defaultValues: {
            email: '',
        },
    });
    const navigate = useNavigate();
    const flashMessage = useNotification();

    async function doSubmit({ email }: { email: string }): Promise<void> {
        await api.resendEmailVerification(email);
        flashMessage(Notification.success('A verfication email has been sent to the provided email address'));
        navigate(route(Route.Login));
    }

    return (
        <Form onSubmit={doSubmit} form={form}>
            <VerticalLayout>
                <FormText>
                    <p>Did you not receive the validation e-mail or is it expired? Resend it with this form.</p>
                    <p>Ensure you also checked your spam folder!</p>
                </FormText>

                <FormInput name="email" label="Email" placeholder="john@doe.com" Input={TextField}></FormInput>

                <HorizontalLayout className="buttons">
                    <Button variant="contained" type="submit">
                        Resend validation email
                    </Button>
                </HorizontalLayout>
            </VerticalLayout>
        </Form>
    );
}
