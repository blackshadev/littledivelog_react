import { useReducer } from 'react';

import { createAction, createReducer } from '@reduxjs/toolkit';

export enum PromiseState {
    Pending,
    Resolved,
    Rejected,
}

const RESOLVE = createAction<unknown>('RESOLVE');
const REJECT = createAction<Error>('REJECT');

type State<T> = {
    result: T | undefined;
    error: Error | undefined;
    state: PromiseState;
};

const initialState = { error: undefined, result: undefined, state: PromiseState.Pending } as State<unknown>;
const reducer = createReducer(initialState as State<unknown>, (builder) =>
    builder
        .addCase(RESOLVE, (state, action) => {
            return { error: undefined, result: action.payload, state: PromiseState.Resolved };
        })
        .addCase(REJECT, (state, action) => {
            return { error: action.payload, result: undefined, state: PromiseState.Rejected };
        }),
);

export default function usePromise<T>(promise: Promise<T>): [T, Error | undefined, PromiseState] {
    const [{ error, result, state }, dispatch] = useReducer(reducer, initialState);

    promise
        .then((newValue) => {
            dispatch(RESOLVE(newValue));
        })
        .catch((error) => {
            dispatch(REJECT(error));
        });

    return [result as T, error, state];
}
