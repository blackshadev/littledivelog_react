import React from 'react';

import { ReactPropsWithChildren } from '../../../../Helpers/ReactPropsWithChildren';
import { Container } from './components';

export default function FormText({ children }: ReactPropsWithChildren): React.ReactElement {
    return <Container role="note">{children}</Container>;
}
