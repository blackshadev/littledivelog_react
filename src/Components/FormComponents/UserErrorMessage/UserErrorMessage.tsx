import { ReactElement } from 'react';

import UserError from '../../../api/errors/UserError';
import UserErrorHandlers from './UserErrorHandlers';

export default function UserErrorMessage({ error }: { error: UserError }): ReactElement {
    const ErrorComponent = UserErrorHandlers.Instance.get(error.code);
    return <ErrorComponent error={error} />;
}
