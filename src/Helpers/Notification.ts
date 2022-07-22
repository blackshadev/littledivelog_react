export enum FlashMessageType {
    Success = 'success',
    Warning = 'warning',
    Error = 'error',
}

export interface INotification {
    type: FlashMessageType;
    message: string;
    timeout?: number;
}

export default class Notification implements INotification {
    public static success(message: string): Notification {
        return new this(FlashMessageType.Success, message);
    }

    public static fromJSON(object: INotification): Notification {
        return new this(object.type, object.message);
    }

    private constructor(
        public readonly type: FlashMessageType,
        public readonly message: string,
        public readonly timeout?: number,
    ) {}

    public time(timeout = 5000): Notification {
        return new Notification(this.type, this.message, timeout);
    }

    public toJSON(): INotification {
        return { message: this.message, type: this.type };
    }
}
