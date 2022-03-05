import React from 'react';

import { LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import nlLocale from 'date-fns/locale/nl';

import { ReactPropsWithChildren } from '../../Helpers/ReactPropsWithChildern';

const Localization: React.FC<ReactPropsWithChildren> = ({ children }) => (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={nlLocale}>
        {children}
    </LocalizationProvider>
);

export default Localization;
