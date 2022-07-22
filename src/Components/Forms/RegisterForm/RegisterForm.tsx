import React from 'react';

import { useForm } from 'react-hook-form';

import Button from '../../FormComponents/Button';
import Form from '../../FormComponents/Form';
import FormInput from '../../FormComponents/FormElements/FormInput';
import VerticalLayout from '../../FormComponents/FormLayout/VerticalLayout';

export type FormType = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
};

type Props = {
    onSubmit(data: FormType): Promise<void>;
};

export function RegisterForm({ onSubmit }: Props): React.ReactElement {
    const form = useForm<FormType>();

    return (
        <Form onSubmit={onSubmit} form={form}>
            <VerticalLayout>
                <FormInput label="Email" name="email" placeholder="johndoe@example.com" />
                <FormInput label="Display name" name="name" placeholder="John Doe" />

                <FormInput label="Password" name="password" placeholder="password" type="password" />
                <FormInput label="Confirm Password" name="confirmPassword" placeholder="password" type="password" />

                <Button variant="contained" type="submit">
                    Register
                </Button>
            </VerticalLayout>
        </Form>
    );
}
