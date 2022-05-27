import axios from 'axios';

import { BuddyDetail } from './types/buddies/BuddyDetail';
import { BuddySummary } from './types/buddies/BuddySummary';
import { withAuthorizationToken } from './auth';
import { apiURL } from './config';
import handleServerError from './handleServerError';

export async function listBuddies(accessToken: string): Promise<BuddySummary[]> {
    const promise = axios.get<BuddySummary[]>(`${apiURL}/buddies`, {
        headers: {
            ...withAuthorizationToken(accessToken),
        },
    });
    const response = await handleServerError(promise);

    return response.data;
}

export async function getBuddy(accessToken: string, buddyId: number): Promise<BuddyDetail> {
    const promise = axios.get<BuddyDetail>(`${apiURL}/buddies/${buddyId}`, {
        headers: {
            ...withAuthorizationToken(accessToken),
        },
    });
    const response = await handleServerError(promise);

    return response.data;
}
