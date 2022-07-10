import React from 'react';

import { Profile } from '../../../../api/types/profile/profile';
import useFormWithValue from '../../../../Helpers/useFormWithValue';
import SaveButton from '../../../Buttons/SaveButton';
import Form from '../../../FormComponents/Form';
import FormInput from '../../../FormComponents/FormElements/FormInput';
import VerticalLayout from '../../../FormComponents/FormLayout/VerticalLayout';
import TextField from '../../../FormComponents/Inputs/TextField';

type FormType = {
    name: string;
    email: string;
};

type Props = { profile: Profile; onUpdate: (data: FormType) => Promise<void> };

export default function ProfileForm({ profile, onUpdate }: Props): React.ReactElement {
    const form = useFormWithValue<FormType>(profile);

    return (
        <Form onSubmit={onUpdate} form={form}>
            <VerticalLayout>
                <FormInput name="name" placeholder="John Doe" label="Name" Input={TextField} />
                <FormInput name="email" placeholder="john@example.com" label="Email" Input={TextField} />

                <SaveButton />
            </VerticalLayout>
        </Form>
    );
}
