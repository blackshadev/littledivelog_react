import { ReactElement } from 'react';

import { Link } from 'react-router-dom';

import UserError from '../../../api/errors/UserError';
import Route, { route } from '../../../Routing/Routes';
import { ErrorLabel, FormErrorContainer } from '../FormError/components';
import UserErrorHandlers from './UserErrorHandlers';

export default function AccountNotVerifiedMessage({}: { error: UserError }): ReactElement {
    return (
        <FormErrorContainer>
            <ErrorLabel role="alert">Account not verified.</ErrorLabel>
            <p>Please verify your email address first through a validation link we have sent to your email address.</p>
            <p>
                Didn&apos;t receive any email? <Link to={route(Route.ResendEmailVerification)}>Click here</Link>.
            </p>
        </FormErrorContainer>
    );
}
UserErrorHandlers.Instance.add('auth.account.not-verified', AccountNotVerifiedMessage);
