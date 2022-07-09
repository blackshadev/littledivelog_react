import React, { useContext } from 'react';

import { getProfile } from '../../api/profile';
import UserDashboard from '../../Components/UserDashboard';
import { AuthContext } from '../../Context/Auth/auth';
import { useApiState } from '../../Context/Auth/callApi';
import { isLoggedIn } from '../../Store/Auth/selectors';

export function Dashboard(): React.ReactElement {
    const [authState] = useContext(AuthContext);
    const loggedIn = isLoggedIn(authState);
    const [profile] = useApiState(getProfile);

    if (!loggedIn) {
        return <>Login</>;
    }

    if (profile.loading) {
        return <>Loading</>;
    }

    return <UserDashboard userProfile={profile.data} />;
}
