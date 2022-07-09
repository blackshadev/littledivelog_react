import React from 'react';

import { createTheme, ThemeProvider } from '@mui/material';
import { Link, LinkProps } from 'react-router-dom';

import { ReactPropsWithChildren } from '../../Helpers/ReactPropsWithChildren';

const LinkBehavior = React.forwardRef<any, Omit<LinkProps, 'to'> & { href: LinkProps['to'] }>((props, ref) => {
    const { href, ...other } = props;
    return <Link ref={ref} to={href} {...other} />;
});
LinkBehavior.displayName = 'LinkBehavior';

const MUIOverride = createTheme({
    components: {
        MuiButtonBase: {
            defaultProps: {
                LinkComponent: LinkBehavior,
            },
        },
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
