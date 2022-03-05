import React from 'react';

import { useForm } from 'react-hook-form';

import { updateDive } from '../../../api/dives';
import { DiveDetail } from '../../../api/types/dives/DiveDetail';
import useAccessToken from '../../../context/auth/useAccessToken';
import Button from '../../Form/Button';
import Form from '../../Form/Form';
import DateTimePicker from '../../Form/FormElements/DateTimePicker';
import FormInput from '../../Form/FormElements/FormInput';
import HorizontalLayout from '../../Form/FormLayout/HorizontalLayout';
import DepthInput from '../../Form/Inputs/Depth';
import DurationInput from '../../Form/Inputs/DurationInput';
import TextField from '../../Form/Inputs/TextField';

type FormType = { divetime: number };

const Details: React.FC<{ dive: DiveDetail }> = ({ dive }) => {
    console.log(dive);
    const form = useForm<FormType>({
        defaultValues: dive,
    });
    // const { accessToken } = useAccessToken();

    async function handleSubmit2(data: FormType): Promise<void> {
        console.log('submit', data);
        // await updateDive(accessToken, dive.dive_id, {
        //     ...dive,
        // });
    }

    return (
        <Form submitOnBlur={true} onSubmit={handleSubmit2} form={form}>
            <HorizontalLayout>
                <DateTimePicker
                    name="date"
                    placeholder="2021-02-26 11:38:00"
                    label="Date"
                />
                <FormInput
                    name="divetime"
                    placeholder="01:34:12"
                    label="Duration"
                    Input={DurationInput}
                />
                <FormInput
                    name="max_depth"
                    placeholder="8.4"
                    label="Max depth"
                    Input={DepthInput}
                />

                <Button variant="contained" type="submit">
                    Submit
                </Button>
            </HorizontalLayout>
        </Form>
    );
};

export default Details;
