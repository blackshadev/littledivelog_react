import React from 'react';

import { BuddyDetail } from '../../../api/types/buddies/BuddyDetail';
import formatDatetime from '../../../Helpers/Formatters/formatDatetime';
import { Optional } from '../../../Helpers/Optional';
import useFormWithValue from '../../../Helpers/useFormWithValue';
import SaveButton from '../../Buttons/SaveButton';
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

const BuddyForm: React.FC<{ buddy: Optional<BuddyDetail>; onSubmit: (data: FormType) => Promise<void> }> = ({
    buddy,
    onSubmit,
}) => {
    const form = useFormWithValue<FormType>(buddy);

    return (
        <Form submitOnBlur={true} onSubmit={onSubmit} form={form}>
            <VerticalLayout>
                <FormInput name="text" placeholder="John Doe" label="Name" Input={TextField} />
                <FormInput name="color" placeholder="#123456" label="Color" Input={ColorPicker} />
                <FormInput name="email" placeholder="test@example.com" label="Email" Input={TextField} />
                <FormInput name="dive_count" label="Dive Count" Input={StaticText} />
                <FormInput
                    name="last_dive"
                    label="Last Dive"
                    Input={StaticText}
                    transformValue={(t): string => formatDatetime(t)}
                />
                <FormInput
                    name="updated"
                    label="Last Updated"
                    Input={StaticText}
                    transformValue={(t): string => formatDatetime(t)}
                />

                <SaveButton />
            </VerticalLayout>
        </Form>
    );
};

export default BuddyForm;
