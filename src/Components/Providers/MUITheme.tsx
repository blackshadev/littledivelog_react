import React from 'react';

import { createTheme, ThemeProvider } from '@mui/material';

import { ReactPropsWithChildren } from '../../Helpers/ReactPropsWithChildern';

const MUIOverride = createTheme({
    components: {
        MuiSelect: {
            defaultProps: {
                variant: 'filled',
            },
        },
        MuiTextField: {
            defaultProps: {
                variant: 'filled',
            },
        },
    },
});

const MUITheme: React.FC<ReactPropsWithChildren> = ({ children }) => (
    <ThemeProvider theme={MUIOverride}>{children}</ThemeProvider>
);

export default MUITheme;
