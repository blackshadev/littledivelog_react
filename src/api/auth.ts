import axios from 'axios';

import { apiURL } from './config';
import handleServerError from './handleServerError';

export type LoginResponse = { refresh_token: string; access_token: string };

export async function login({ email, password }: { email: string; password: string }): Promise<LoginResponse> {
    const promise = axios.post<LoginResponse>(`${apiURL}/auth/sessions`, {
        email,
        password,
    });
    const response = await handleServerError(promise);
    return response.data;
}

export async function logout(refreshToken: string): Promise<void> {
    const promise = axios.delete<void>(`${apiURL}/auth/sessions`, {
        headers: {
            ...withAuthorizationToken(refreshToken),
        },
    });
    await handleServerError(promise);
}

export async function register({
    email,
    password,
    name,
}: {
    email: string;
    password: string;
    name: string;
}): Promise<void> {
    const promise = axios.post<void>(`${apiURL}/auth/register`, {
        email,
        name,
        password,
    });

    await handleServerError(promise);
}

export async function getAccessToken(refreshToken: string): Promise<string> {
    const promise = axios.get<{ access_token: string }>(`${apiURL}/auth/sessions/refresh`, {
        headers: {
            ...withAuthorizationToken(refreshToken),
        },
    });
    const response = await handleServerError(promise);
    return response.data.access_token;
}

export async function resendEmailVerification(email: string): Promise<void> {
    const promise = axios.post<{ email: string }>(`${apiURL}/auth/verify/resend`, {
        email,
    });
    await handleServerError(promise);
}

export function withAuthorizationToken(token: string): {
    Authorization: string;
} {
    return {
        Authorization: 'Bearer ' + token,
    };
}
