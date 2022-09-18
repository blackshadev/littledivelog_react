export default class UserError extends Error {
    public constructor(public readonly code: string, message: string) {
        super(message);
    }
}
