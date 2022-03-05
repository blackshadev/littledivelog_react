import React from 'react';

import AuthProvider from '../../Context/Auth/auth';
import { ReactPropsWithChildren } from '../../Helpers/ReactPropsWithChildern';

const Auth: React.FC<ReactPropsWithChildren> = ({ children }) => (
    <AuthProvider>{children}</AuthProvider>
);

export default Auth;
