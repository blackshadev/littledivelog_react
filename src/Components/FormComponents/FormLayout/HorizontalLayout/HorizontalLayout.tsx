import React from 'react';

import { Box } from '@mui/system';

import { ReactPropsWithChildren } from '../../../../Helpers/ReactPropsWithChildren';

const HorizontalLayout: React.FC<ReactPropsWithChildren<{ className?: string }>> = ({ children, className }) => {
    return (
        <Box
            className={className}
            sx={{
                alignItems: 'start',
                display: 'flex',
                flexDirection: 'row',
            }}
        >
            {children}
        </Box>
    );
};

export default HorizontalLayout;
