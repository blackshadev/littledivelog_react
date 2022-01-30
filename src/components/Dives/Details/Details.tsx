import React, { useCallback, useState } from 'react';

import { updateDive } from '../../../api/dives';
import { DiveDetail } from '../../../api/types/dives/DiveDetail';
import useAccessToken from '../../../context/auth/useAccessToken';
import Form from '../../Form/Form';
import FormInput from '../../Form/FormElement';
import DurationInput from '../../Form/Inputs/DurationInput';

const Details: React.FC<{ dive: DiveDetail }> = ({ dive }) => {
    const [diveTime, setDivetime] = useState<number>(dive.divetime);
    const { accessToken } = useAccessToken();

    async function handleSubmit(): Promise<void> {
        console.log('submit', diveTime);
        await updateDive(accessToken, dive.dive_id, {
            ...dive,
        });
    }

    const handleChange = useCallback(async (): Promise<void> => {
        console.log('changexxx', diveTime);
    }, [diveTime]);

    return (
        <Form onSubmit={handleSubmit} onChange={handleChange}>
            <FormInput
                name="divetime"
                placeholder="01:34:12"
                label="Duration"
                value={diveTime}
                onBlur={(_, dt): void => {
                    console.log(dt);
                    setDivetime(dt as number);
                }}
                Input={DurationInput}
            />
        </Form>
    );
};

export default Details;
