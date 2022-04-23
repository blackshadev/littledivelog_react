import React from 'react';

import { useForm } from 'react-hook-form';

import { updateDive } from '../../../api/dives';
import { DiveDetail } from '../../../api/types/dives/DiveDetail';
import { Place } from '../../../api/types/places/country';
import useAccessToken from '../../../Context/Auth/useAccessToken';
import Button from '../../Form/Button';
import Form from '../../Form/Form';
import FormInput from '../../Form/FormElements/FormInput';
import VerticalLayout from '../../Form/FormLayout/VerticalLayout';
import BuddySearch from '../../Form/Inputs/BuddiesInput';
import DateTimePickerInput from '../../Form/Inputs/DateTimePicker';
import DepthInput from '../../Form/Inputs/Depth';
import DurationInput from '../../Form/Inputs/DurationInput';
import PlaceSearch from '../../Form/Inputs/PlaceSearch';

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
        form.setError('max_depth', { message: 'error on place' });
        // await updateDive(accessToken, dive.dive_id, {
        //     ...dive,
        // });
    }

    return (
        <Form submitOnBlur={true} onSubmit={handleSubmit2} form={form}>
            <VerticalLayout>
                <FormInput name="date" placeholder="2021-02-26 11:38:00" label="Date" Input={DateTimePickerInput} />
                <FormInput name="divetime" placeholder="01:34:12" label="Duration" Input={DurationInput} />
                <FormInput name="max_depth" placeholder="8.4" label="Max depth" Input={DepthInput} />
                <FormInput name="place" label="Divespot" placeholder="Zeeland brug" Input={PlaceSearch} />
                <FormInput name="buddies" label="Buddies" placeholder="John Doe" Input={BuddySearch} />

                <Button variant="contained" type="submit">
                    Submit
                </Button>
            </VerticalLayout>
        </Form>
    );
};

export default Details;
