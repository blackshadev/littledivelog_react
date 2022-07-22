/* eslint-disable react-hooks/exhaustive-deps */
import { Reducer, useCallback, useContext, useEffect, useReducer } from 'react';

import { getAccessToken } from '../../api/auth';
import AuthenticationError from '../../api/errors/AuthenticationError';
import { logOut, setAccessToken } from '../../Store/Auth/actions';
import { AuthContext } from './auth';

type ApiState<T> =
    | {
          data: undefined;
          loading: true;
      }
    | {
          data: T;
          loading: false;
      };

export default function useApiData<T extends unknown[], R>(
    fn: (token: string, ...args: T) => Promise<R>,
    ...args: T
): ApiState<R> {
    const [apiState] = useApiState(fn, ...args);
    return apiState;
}

export function useApiState<T extends unknown[], R>(
    fn: (token: string, ...args: T) => Promise<R>,
    ...args: T
): [ApiState<R>, (value: ApiState<R>) => void] {
    const [apiData, setApiData] = useReducer<Reducer<ApiState<R>, Partial<ApiState<R>>>>(
        (state, newState) =>
            ({
                ...state,
                ...newState,
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
            } as any),
        {
            data: undefined,
            loading: true,
        } as ApiState<R>,
    );

    const getData = useApiCall(fn);

    useEffect((): (() => void) => {
        let mounted = true;
        setApiData({ data: undefined, loading: true });

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
    }, [getData]);

    return [apiData, setApiData];
}

export function useApiCall<T extends unknown[], R>(
    fn: (token: string, ...args: T) => Promise<R>,
): (...args: T) => Promise<R> {
    const [state, dispatch] = useContext(AuthContext);

    const authenticate = useCallback(async (refreshToken: string): Promise<string> => {
        let token: string;
        try {
            token = await getAccessToken(refreshToken);
        } catch (err) {
            if (err instanceof AuthenticationError) {
                dispatch(logOut);
            }
            throw err;
        }
        dispatch(setAccessToken(token));

        return token;
    }, []);

    return useCallback(
        async (...args: T) => {
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
                    const token = await authenticate(state.refreshToken);

                    return await fn(token, ...args);
                }

                throw err;
            }
        },
        [state, authenticate],
    );
}
