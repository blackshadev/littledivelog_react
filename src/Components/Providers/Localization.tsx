import React from 'react';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { ReactPropsWithChildren } from '../../Helpers/ReactPropsWithChildren';

import 'dayjs/locale/nl';

const Localization: React.FC<ReactPropsWithChildren> = ({ children }) => (
    <LocalizationProvider dateAdapter={AdapterDayjs}  adapterLocale="nl">
        {children}
    </LocalizationProvider>
);

export default Localization;
