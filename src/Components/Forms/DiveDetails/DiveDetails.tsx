import React from 'react';

import { DiveBuddy } from '../../../api/types/dives/DiveBuddy';
import { DiveDetail } from '../../../api/types/dives/DiveDetail';
import { DiveTag } from '../../../api/types/dives/DiveTag';
import { Place } from '../../../api/types/places/country';
import { DiveTank } from '../../../api/types/tanks/DiveTank';
import formatDatetime from '../../../Helpers/Formatters/formatDatetime';
import { Optional } from '../../../Helpers/Optional';
import useFormWithValue from '../../../Helpers/useFormWithValue';
import SaveButton from '../../Buttons/SaveButton';
import Form from '../../FormComponents/Form';
import FormInput from '../../FormComponents/FormElements/FormInput';
import VerticalLayout from '../../FormComponents/FormLayout/VerticalLayout';
import BuddySearch from '../../FormComponents/Inputs/BuddiesInput';
import ComputerSelectField from '../../FormComponents/Inputs/ComputerSelectField';
import DateTimePickerInput from '../../FormComponents/Inputs/DateTimePicker';
import DepthInput from '../../FormComponents/Inputs/Depth';
import DurationInput from '../../FormComponents/Inputs/DurationInput';
import PlaceSearch from '../../FormComponents/Inputs/PlaceSearch';
import StaticText from '../../FormComponents/Inputs/StaticText';
import TagsInput from '../../FormComponents/Inputs/TagsInput';
import TanksInput from '../../FormComponents/Inputs/TankInput';

type FormType = {
    divetime: number;
    max_depth: number;
    computer?: { computer_id?: number; vendor: string; name: string };
    date: Date;
    place: null | Place;
    tanks: DiveTank[];
    buddies: DiveBuddy[];
    tags: DiveTag[];
};

type Props = { dive: Optional<DiveDetail>; onUpdate: (data: FormType) => Promise<void> };

export default function Details({ dive, onUpdate }: Props): React.ReactElement {
    const form = useFormWithValue<FormType>(dive);

    return (
        <Form onSubmit={onUpdate} form={form}>
            <VerticalLayout>
                <FormInput name="date" placeholder="2021-02-26 11:38:00" label="Date" Input={DateTimePickerInput} />
                <FormInput name="divetime" placeholder="01:34:12" label="Duration" Input={DurationInput} />
                <FormInput name="max_depth" placeholder="8.4" label="Max depth" Input={DepthInput} />
                <FormInput
                    name="computer"
                    label="Computer"
                    isImported={dive.is_imported ?? false}
                    placeholder="Computer"
                    Input={ComputerSelectField}
                />
                <FormInput name="place" label="Divespot" placeholder="Zeeland brug" Input={PlaceSearch} />
                <FormInput
                    name="buddies"
                    label="Buddies"
                    placeholder="John Doe"
                    defaultValue={[]}
                    Input={BuddySearch}
                />
                <FormInput name="tags" label="Tags" placeholder="Deco" defaultValue={[]} Input={TagsInput} />
                <FormInput name="tanks" label="Tank" defaultValue={[]} Input={TanksInput} />
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
}
