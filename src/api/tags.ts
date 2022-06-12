import axios from 'axios';

import { TagSummary } from './types/tags/TagSummary';
import { WriteTag } from './types/tags/WriteTag';
import { withAuthorizationToken } from './auth';
import { apiURL } from './config';
import handleServerError from './handleServerError';

export async function saveTag(accessToken: string, tagId: number, data: WriteTag): Promise<TagSummary> {
    const promise = axios.put<TagSummary>(`${apiURL}/tags/${tagId}`, data, {
        headers: {
            ...withAuthorizationToken(accessToken),
        },
    });
    const response = await handleServerError(promise);

    return response.data;
}

export async function listTags(accessToken: string): Promise<TagSummary[]> {
    const promise = axios.get<TagSummary[]>(`${apiURL}/tags`, {
        headers: {
            ...withAuthorizationToken(accessToken),
        },
    });
    const response = await handleServerError(promise);

    return response.data;
}

export async function getTag(accessToken: string, tagId: number): Promise<TagSummary> {
    const promise = axios.get<TagSummary>(`${apiURL}/tags/${tagId}`, {
        headers: {
            ...withAuthorizationToken(accessToken),
        },
    });
    const response = await handleServerError(promise);

    return response.data;
}
