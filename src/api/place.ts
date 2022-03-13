import axios from 'axios';

import { Place } from './types/places/country';
import { withAuthorizationToken } from './auth';
import { apiURL } from './config';
import handleServerError from './handleServerError';

export async function listPlaces(
    accessToken: string,
    search: {
        keywords?: string;
        country?: string;
    } = {},
): Promise<Place[]> {
    const promise = axios.get<Place[]>(
        `${apiURL}/places/_search?${buildQueryString(search)}`,
        {
            headers: {
                ...withAuthorizationToken(accessToken),
            },
        },
    );
    const response = await handleServerError(promise);

    return response.data;
}

function buildQueryString(params: { [qs: string]: string }): string {
    return Object.keys(params)
        .filter((key) => !!params[key])
        .map((key) => {
            return (
                encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
            );
        })
        .join('&');
}
