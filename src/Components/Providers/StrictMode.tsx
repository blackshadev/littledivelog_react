import React from 'react';

import { ReactPropsWithChildren } from '../../Helpers/ReactPropsWithChildren';

const StrictMode: React.FC<ReactPropsWithChildren> = ({ children }) => <React.StrictMode>{children}</React.StrictMode>;

export default StrictMode;
