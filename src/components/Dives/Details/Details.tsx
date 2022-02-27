import React from 'react';

import { useForm } from 'react-hook-form';

import { updateDive } from '../../../api/dives';
import { DiveDetail } from '../../../api/types/dives/DiveDetail';
import useAccessToken from '../../../context/auth/useAccessToken';
import Button from '../../Form/Button';
import Form from '../../Form/Form';
import FormInput from '../../Form/FormElement';
import DepthInput from '../../Form/Inputs/Depth';
import DurationInput from '../../Form/Inputs/DurationInput';

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
            <FormInput
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

            <Button>Submit</Button>
        </Form>
    );
};

export default Details;
