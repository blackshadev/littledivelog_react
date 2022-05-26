import React from 'react';

import { useForm } from 'react-hook-form';

import { DiveDetail } from '../../../api/types/dives/DiveDetail';
import { Place } from '../../../api/types/places/country';
import { DiveTank } from '../../../api/types/tanks/DiveTank';
import Button from '../../FormComponents/Button';
import Form from '../../FormComponents/Form';
import FormInput from '../../FormComponents/FormElements/FormInput';
import VerticalLayout from '../../FormComponents/FormLayout/VerticalLayout';
import BuddySearch from '../../FormComponents/Inputs/BuddiesInput';
import DateTimePickerInput from '../../FormComponents/Inputs/DateTimePicker';
import DepthInput from '../../FormComponents/Inputs/Depth';
import DurationInput from '../../FormComponents/Inputs/DurationInput';
import PlaceSearch from '../../FormComponents/Inputs/PlaceSearch';
import TagsInput from '../../FormComponents/Inputs/TagsInput';
import TanksInput from '../../FormComponents/Inputs/TankInput';

type FormType = {
    divetime: number;
    max_depth: number;
    date: Date;
    place: null | Place;
    tanks: DiveTank[];
};

const Details: React.FC<{ dive: DiveDetail; onUpdate: (data: FormType) => Promise<void> }> = ({ dive, onUpdate }) => {
    const form = useForm<FormType>({
        defaultValues: dive,
    });
    async function handleSubmit2(data: FormType): Promise<void> {
        await onUpdate(data);
    }

    return (
        <Form submitOnBlur={true} onSubmit={handleSubmit2} form={form}>
            <VerticalLayout>
                <FormInput name="date" placeholder="2021-02-26 11:38:00" label="Date" Input={DateTimePickerInput} />
                <FormInput name="divetime" placeholder="01:34:12" label="Duration" Input={DurationInput} />
                <FormInput name="max_depth" placeholder="8.4" label="Max depth" Input={DepthInput} />
                <FormInput name="place" label="Divespot" placeholder="Zeeland brug" Input={PlaceSearch} />
                <FormInput name="buddies" label="Buddies" placeholder="John Doe" Input={BuddySearch} />
                <FormInput name="tags" label="Tags" placeholder="Deco" Input={TagsInput} />
                <FormInput name="tanks" label="Tank" placeholder="Tank" Input={TanksInput} />

                <Button variant="contained" type="submit">
                    Submit
                </Button>
            </VerticalLayout>
        </Form>
    );
};

export default Details;
