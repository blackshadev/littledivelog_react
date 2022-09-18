import { ReactElement } from 'react';

import UserError from '../../../api/errors/UserError';
import { ErrorLabel, FormErrorContainer } from '../FormError/components';
import UserErrorHandlers from './UserErrorHandlers';

export default function DefaultUserErrorMessage({ error }: { error: UserError }): ReactElement {
    return (
        <FormErrorContainer>
            <ErrorLabel role="alert">{error.message}</ErrorLabel>
        </FormErrorContainer>
    );
}
UserErrorHandlers.Instance.setDefaultHandler(DefaultUserErrorMessage);
