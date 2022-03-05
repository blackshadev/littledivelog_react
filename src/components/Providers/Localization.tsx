import React from 'react';

import { LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import nlLocale from 'date-fns/locale/nl';

import { ReactPropsWithChildren } from '../utils/ReactPropsWithChildern';

const Locale: React.FC<ReactPropsWithChildren> = ({ children }) => (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={nlLocale}>
        {children}
    </LocalizationProvider>
);

export default Locale;
