import axios from 'axios';

import { Country } from './types/places/country';
import { withAuthorizationToken } from './auth';
import { apiURL } from './config';
import handleServerError from './handleServerError';

export async function listCountries(accessToken: string): Promise<Country[]> {
    const promise = axios.get<Country[]>(`${apiURL}/countries`, {
        headers: {
            ...withAuthorizationToken(accessToken),
        },
    });
    const response = await handleServerError(promise);

    return response.data;
}
