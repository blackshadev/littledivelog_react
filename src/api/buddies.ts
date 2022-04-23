import axios from 'axios';

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
