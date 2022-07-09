import axios from 'axios';

import { Profile } from './types/profile/profile';
import { withAuthorizationToken } from './auth';
import { apiURL } from './config';
import handleServerError from './handleServerError';

export async function getProfile(accessToken: string): Promise<Profile> {
    const promise = axios.get<Profile>(`${apiURL}/user/profile`, {
        headers: {
            ...withAuthorizationToken(accessToken),
        },
    });
    const response = await handleServerError(promise);

    return response.data;
}
