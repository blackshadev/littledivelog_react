import React from 'react';

import { useForm } from 'react-hook-form';

import { updateDive } from '../../../api/dives';
import { DiveDetail } from '../../../api/types/dives/DiveDetail';
import { Place } from '../../../api/types/places/country';
import useAccessToken from '../../../Context/Auth/useAccessToken';
import Button from '../../Form/Button';
import Form from '../../Form/Form';
import DateTimePicker from '../../Form/FormElements/DateTimePicker';
import FormInput from '../../Form/FormElements/FormInput';
import PlaceInput from '../../Form/FormElements/PlaceInput';
import HorizontalLayout from '../../Form/FormLayout/HorizontalLayout';
import DepthInput from '../../Form/Inputs/Depth';
import DurationInput from '../../Form/Inputs/DurationInput';
import TextField from '../../Form/Inputs/TextField';

type FormType = {
    divetime: number;
    max_depth: number;
    date: Date;
    place: null | Place;
};

const Details: React.FC<{ dive: DiveDetail }> = ({ dive }) => {
    console.log(dive);
    const form = useForm<FormType>({
        defaultValues: dive,
    });
    // const { accessToken } = useAccessToken();

    async function handleSubmit2(data: FormType): Promise<void> {
        console.log('submit', data);
        form.setError('place', { message: 'error on place' });
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

                <PlaceInput
                    name="place"
                    label="Divespot"
                    placeholder="Zeeland brug"
                />

                <Button variant="contained" type="submit">
                    Submit
                </Button>
            </HorizontalLayout>
        </Form>
    );
};

export default Details;