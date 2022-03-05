import React from 'react';

import { Box } from '@mui/system';

import { ReactPropsWithChildren } from '../../../../utils/ReactPropsWithChildern';

const HorizontalLayout: React.FC<ReactPropsWithChildren> = ({ children }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: 1,
            }}
        >
            {children}
        </Box>
    );
};

export default HorizontalLayout;
