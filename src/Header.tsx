import React from 'react';

import { Helmet, HelmetProvider } from 'react-helmet-async';

const Header: React.FC = () => (
    <HelmetProvider>
        <Helmet>
            <title>Little DiveLog</title>
        </Helmet>
    </HelmetProvider>
);

export default Header;
