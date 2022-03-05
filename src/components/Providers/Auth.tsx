import React from 'react';

import AuthProvider from '../context/auth/auth';
import { ReactPropsWithChildren } from '../utils/ReactPropsWithChildern';

const Auth: React.FC<ReactPropsWithChildren> = ({ children }) => (
    <AuthProvider>{children}</AuthProvider>
);

export default Auth;
