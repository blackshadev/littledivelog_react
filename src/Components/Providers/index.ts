import React from 'react';

import { ApplicationContextProvider } from '../../Context/Application';
import AuthProvider from '../../Context/Auth/auth';
import combineComponents from '../../Helpers/CombineComponents';
import Localization from './Localization';
import MUITheme from './MUITheme';

const Providers = combineComponents(React.StrictMode, Localization, AuthProvider, MUITheme, ApplicationContextProvider);

export default Providers;
