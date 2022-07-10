import React from 'react';

import { Link } from 'react-router-dom';

import { getProfile } from '../../api/profile';
import * as api from '../../api/profile';
import ProfileForm from '../../Components/Forms/UserForms/ProfileForm';
import { useApiCall, useApiState } from '../../Context/Auth/callApi';
import Route, { route } from '../../Routing/Routes';

export default function Profile(): React.ReactElement {
    const [profile, setProfile] = useApiState(getProfile);
    const updateProfile = useApiCall(api.updateProfile);

    if (profile.loading) {
        return <span>Loading...</span>;
    }

    return (
        <>
            <ProfileForm
                profile={profile.data}
                onUpdate={async (data): Promise<void> => {
                    const newProfile = await updateProfile(data);
                    setProfile({ data: newProfile, loading: false });
                }}
            ></ProfileForm>

            <Link to={route(Route.ChangePassword)}>Change password</Link>
        </>
    );
}
