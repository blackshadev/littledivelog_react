import React from 'react';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import nlLocale from 'date-fns/locale/nl';

import { ReactPropsWithChildren } from '../../Helpers/ReactPropsWithChildern';

const Localization: React.FC<ReactPropsWithChildren> = ({ children }) => (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={nlLocale}>
        {children}
    </LocalizationProvider>
);

export default Localization;
