import React from 'react';

import { ReactPropsWithChildren } from '../utils/ReactPropsWithChildern';

const StrictMode: React.FC<ReactPropsWithChildren> = ({ children }) => (
    <React.StrictMode>{children}</React.StrictMode>
);

export default StrictMode;
