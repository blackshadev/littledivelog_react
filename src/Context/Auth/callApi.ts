import { Reducer, useContext, useEffect, useReducer } from 'react';

import { getAccessToken } from '../../api/auth';
import AuthenticationError from '../../api/errors/AuthenticationError';
import { setAccessToken } from '../../Store/Auth/actions';
import { AuthContext } from './auth';

type ApiState<T> = {
    data: T | undefined;
    loading: boolean;
};

export default function useApi<T extends unknown[], R>(
    fn: (token: string, ...args: T) => Promise<R>,
    ...args: T
): ApiState<R> {
    const [apiData, setApiData] = useReducer<Reducer<ApiState<R>, Partial<ApiState<R>>>>(
        (state, newState) => ({
            ...state,
            ...newState,
        }),
        {
            data: undefined,
            loading: false,
        } as ApiState<R>,
    );
    const { state, dispatch } = useContext(AuthContext);

    useEffect((): (() => void) => {
        let mounted = true;
        setApiData({ loading: true });

        const getData = async (...args: T): Promise<R> => {
            if (!state.accessToken || !state.refreshToken) {
                throw new Error('No tokens');
            }

            try {
                return await fn(state.accessToken, ...args);
            } catch (err) {
                if (!state.refreshToken) {
                    throw new Error('No refresh token');
                }
                if (err instanceof AuthenticationError) {
                    const token = await getAccessToken(state.refreshToken);
                    dispatch(setAccessToken(token));

                    return await fn(token, ...args);
                }

                throw err;
            }
        };

        getData(...args).then((data) => {
            if (mounted) {
                setApiData({
                    data,
                    loading: false,
                });
            }
        });

        return (): void => {
            mounted = false;
        };
    }, [state]);

    return apiData;
}
