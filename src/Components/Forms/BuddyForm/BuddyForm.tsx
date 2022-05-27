import React from 'react';

import { useForm } from 'react-hook-form';

import { BuddyDetail } from '../../../api/types/buddies/BuddyDetail';
import Button from '../../FormComponents/Button';
import Form from '../../FormComponents/Form';
import FormInput from '../../FormComponents/FormElements/FormInput';
import VerticalLayout from '../../FormComponents/FormLayout/VerticalLayout';
import ColorPicker from '../../FormComponents/Inputs/ColorPicker';
import StaticText from '../../FormComponents/Inputs/StaticText';
import TextField from '../../FormComponents/Inputs/TextField';

type FormType = {
    text: string;
    color: string;
    email: string;
};

const BuddyForm: React.FC<{ buddy: BuddyDetail }> = ({ buddy }) => {
    const form = useForm<FormType>({
        defaultValues: buddy,
    });

    return (
        <Form
            submitOnBlur={true}
            onSubmit={async (): Promise<void> => {
                /**/
            }}
            form={form}
        >
            <VerticalLayout>
                <FormInput name="text" placeholder="John Doe" label="Name" Input={TextField} />
                <FormInput name="color" placeholder="#123456" label="Color" Input={ColorPicker} />
                <FormInput name="email" placeholder="test@example.com" label="Email" Input={TextField} />
                <FormInput name="dive_count" label="Dive Count" Input={StaticText} />
                <FormInput name="last_dive" label="Last Dive" Input={StaticText} />

                <Button variant="contained" type="submit">
                    Submit
                </Button>
            </VerticalLayout>
        </Form>
    );
};

export default BuddyForm;
