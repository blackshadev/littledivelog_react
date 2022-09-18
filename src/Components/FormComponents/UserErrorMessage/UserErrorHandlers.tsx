import { FunctionComponent } from 'react';

import UserError from '../../../api/errors/UserError';

type UserErrorHandler = FunctionComponent<{ error: UserError }>;

export default class UserErrorHandlers {
    public static Instance: UserErrorHandlers = new UserErrorHandlers();

    private handlers: { [code: string]: UserErrorHandler } = {};

    private defaultHandler: UserErrorHandler | undefined;

    public setDefaultHandler(fn: UserErrorHandler): void {
        this.defaultHandler = fn;
    }

    public add(code: string, fn: UserErrorHandler): void {
        this.handlers[code] = fn;
    }

    public get(code: string): UserErrorHandler {
        return this.handlers[code] ?? this.defaultHandler;
    }
}
