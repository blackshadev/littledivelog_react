import React, { useReducer } from 'react';

import { ReactPropsWithChildren } from '../../Helpers/ReactPropsWithChildren';
import createReducerContext from '../../Store/createReducerContext';
import { appReducer } from './reducer';
import { initializeState, initialState } from './state';

const ApplicationContext = createReducerContext(initialState);

export function ApplicationContextProvider({ children }: ReactPropsWithChildren): React.ReactElement {
    const [state, dispatch] = useReducer(appReducer, initialState, initializeState);

    return <ApplicationContext.Provider value={[state, dispatch]}>{children}</ApplicationContext.Provider>;
}

export default ApplicationContext;
