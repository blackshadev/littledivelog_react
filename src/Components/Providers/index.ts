import React from 'react';

import { ApplicationContextProvider } from '../../Context/Application';
import AuthProvider from '../../Context/Auth/auth';
import { NotificationsContextProvider } from '../../Context/Notifications';
import combineComponents from '../../Helpers/CombineComponents';
import Localization from './Localization';
import MUITheme from './MUITheme';

const Providers = combineComponents(
    React.StrictMode,
    Localization,
    AuthProvider,
    MUITheme,
    ApplicationContextProvider,
    NotificationsContextProvider,
);

export default Providers;
