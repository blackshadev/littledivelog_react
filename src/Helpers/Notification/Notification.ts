import messages from './predefined-messages.json';

export enum FlashMessageType {
    Success = 'success',
    Warning = 'warning',
    Error = 'error',
}

export interface INotification {
    type: FlashMessageType;
    message: string;
    key?: string;
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
        public readonly key?: string,
    ) {}

    public withTimeout(timeout = 5000): Notification {
        return new Notification(this.type, this.message, timeout, this.key);
    }

    public withPredefinedMessage(key: string | keyof typeof messages): Notification {
        const message = messages[key as keyof typeof messages] ?? key;

        return new Notification(this.type, message, this.timeout, key);
    }

    public toJSON(): INotification {
        return { key: this.key, message: this.message, type: this.type };
    }
}
