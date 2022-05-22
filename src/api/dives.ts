import axios from 'axios';

import type { DiveDetail } from './types/dives/DiveDetail';
import { DiveProfile } from './types/dives/DiveProfile';
import type { DiveSummary } from './types/dives/DiveSummary';
import type { DiveUpdate } from './types/dives/DiveUpdate';
import { withAuthorizationToken } from './auth';
import { apiURL } from './config';
import handleServerError from './handleServerError';

export async function listDives(accessToken: string): Promise<DiveSummary[]> {
    const promise = axios.get<DiveSummary[]>(`${apiURL}/dives/`, {
        headers: {
            ...withAuthorizationToken(accessToken),
        },
    });
    const response = await handleServerError(promise);

    return response.data;
}

export async function getDive(accessToken: string, diveId: number): Promise<DiveDetail> {
    const promise = axios.get<DiveDetail>(`${apiURL}/dives/${diveId}`, {
        headers: {
            ...withAuthorizationToken(accessToken),
        },
    });
    const response = await handleServerError(promise);

    return response.data;
}

export async function getSamples(accessToken: string, diveId: number): Promise<DiveProfile> {
    const promise = axios.get<DiveProfile>(`${apiURL}/dives/${diveId}/samples`, {
        headers: {
            ...withAuthorizationToken(accessToken),
        },
    });
    const response = await handleServerError(promise);

    return response.data;
}

export async function updateDive(accessToken: string, diveId: number, dive: DiveUpdate): Promise<DiveDetail> {
    const promise = axios.put<DiveDetail>(`${apiURL}/dives/${diveId}`, dive, {
        headers: {
            ...withAuthorizationToken(accessToken),
        },
    });
    const response = await handleServerError(promise);

    return response.data;
}
