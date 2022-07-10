import React from 'react';

import { useForm } from 'react-hook-form';

import SaveButton from '../../../Buttons/SaveButton';
import Form from '../../../FormComponents/Form';
import FormInput from '../../../FormComponents/FormElements/FormInput';
import VerticalLayout from '../../../FormComponents/FormLayout/VerticalLayout';
import TextField from '../../../FormComponents/Inputs/TextField';

type FormType = {
    old: string;
    new: string;
    newConfirm: string;
};

type Props = {
    onUpdate(data: FormType): Promise<void>;
};

export default function ChangePasswordForm({ onUpdate }: Props): React.ReactElement {
    const form = useForm<FormType>();

    async function preSubmitValidate(values: FormType): Promise<void> {
        if (values.newConfirm !== values.new) {
            form.setError('newConfirm', { message: 'Confirmation is not the same as password' });
            return;
        }

        await onUpdate(values);
    }

    return (
        <Form onSubmit={preSubmitValidate} form={form}>
            <VerticalLayout>
                <FormInput
                    name="old"
                    placeholder="Old Password"
                    label="Old Password"
                    type="password"
                    Input={TextField}
                />
                <FormInput
                    name="new"
                    placeholder="New Password"
                    label="New Password"
                    type="password"
                    Input={TextField}
                />
                <FormInput
                    name="newConfirm"
                    placeholder="Confirm newPassword"
                    label="Confirm New Password"
                    type="password"
                    Input={TextField}
                />
                <SaveButton />
            </VerticalLayout>
        </Form>
    );
}
