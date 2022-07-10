import axios from 'axios';

import { Profile, UpdateProfileData } from './types/profile/profile';
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

export async function updateProfile(accessToken: string, data: UpdateProfileData): Promise<Profile> {
    const promise = axios.put<Profile>(`${apiURL}/user/profile`, data, {
        headers: {
            ...withAuthorizationToken(accessToken),
        },
    });
    const response = await handleServerError(promise);

    return response.data;
}

export async function changePassword(accessToken: string, data: { old: string; new: string }): Promise<void> {
    const promise = axios.put<void>(`${apiURL}/user/profile/password`, data, {
        headers: {
            ...withAuthorizationToken(accessToken),
        },
    });

    await handleServerError(promise);
}
