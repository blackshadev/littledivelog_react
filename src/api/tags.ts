import axios from 'axios';

import { TagSummary } from './types/tags/TagSummary';
import { withAuthorizationToken } from './auth';
import { apiURL } from './config';
import handleServerError from './handleServerError';

export async function listTags(accessToken: string): Promise<TagSummary[]> {
    const promise = axios.get<TagSummary[]>(`${apiURL}/tags`, {
        headers: {
            ...withAuthorizationToken(accessToken),
        },
    });
    const response = await handleServerError(promise);

    return response.data;
}
