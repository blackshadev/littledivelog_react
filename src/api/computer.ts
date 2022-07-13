import axios from 'axios';

import { Computer } from './types/computers/Computer';
import { withAuthorizationToken } from './auth';
import { apiURL } from './config';
import handleServerError from './handleServerError';

export async function listComputers(accessToken: string): Promise<Computer[]> {
    const promise = axios.get<Computer[]>(`${apiURL}/computers/`, {
        headers: {
            ...withAuthorizationToken(accessToken),
        },
    });
    const response = await handleServerError(promise);

    return response.data;
}
