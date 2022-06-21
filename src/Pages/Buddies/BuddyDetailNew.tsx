import React from 'react';

import { useNavigate } from 'react-router-dom';

import * as api from '../../api/buddies';
import BuddyForm from '../../Components/Forms/BuddyForm';
import { useApiCall } from '../../Context/Auth/callApi';
import { randomColor } from '../../Helpers/Colors/randomColor';
import Route, { route } from '../../Routing/Routes';

const BuddyDetailNew: React.FC = () => {
    const saveBuddy = useApiCall(api.newBuddy);
    const navigate = useNavigate();

    return (
        <BuddyForm
            buddy={{
                color: randomColor(),
            }}
            onSubmit={async (data): Promise<void> => {
                const newBuddyData = await saveBuddy({
                    color: data.color,
                    email: data.email,
                    text: data.text,
                });

                navigate(route(Route.BuddyDetail, { buddyId: newBuddyData.buddy_id + '' }));
            }}
        />
    );
};

export default BuddyDetailNew;
