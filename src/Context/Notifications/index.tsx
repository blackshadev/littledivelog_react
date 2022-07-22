import React, { useReducer } from 'react';

import { ReactPropsWithChildren } from '../../Helpers/ReactPropsWithChildren';
import createReducerContext from '../../Store/createReducerContext';
import { appReducer } from './reducer';
import { initialState } from './state';

const NotificationsContext = createReducerContext(initialState);

export function NotificationsContextProvider({ children }: ReactPropsWithChildren): React.ReactElement {
    const [state, dispatch] = useReducer(appReducer, initialState);

    return <NotificationsContext.Provider value={[state, dispatch]}>{children}</NotificationsContext.Provider>;
}

export default NotificationsContext;
