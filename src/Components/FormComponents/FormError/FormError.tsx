import React from 'react';

import UserError from '../../../api/errors/UserError';
import UserErrorMessage from '../UserErrorMessage';
import { ErrorLabel, FormErrorContainer } from './components';

export default function FormError({ formError }: { formError: Error | undefined }): React.ReactElement | null {
    if (!formError) {
        return null;
    }

    if (formError instanceof UserError) {
        return <UserErrorMessage error={formError} />;
    }

    return (
        <FormErrorContainer>
            <ErrorLabel role="alert">{formError.message}</ErrorLabel>
        </FormErrorContainer>
    );
}
