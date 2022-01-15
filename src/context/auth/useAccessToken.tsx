import { useContext } from 'react';

import { useNavigate } from 'react-router-dom';

import Route, { route } from '../../Routes';
import { getAccessToken } from '../../store/auth/selectors';
import { AuthContext } from './auth';

const useAccessToken = (): { accessToken: string } => {
    const { state } = useContext(AuthContext);
    const navigate = useNavigate();

    const accessToken = getAccessToken(state);

    if (!accessToken) {
        navigate(route(Route.Login), { replace: true });
        return { accessToken: '' };
    }

    return { accessToken };
};

export default useAccessToken;
