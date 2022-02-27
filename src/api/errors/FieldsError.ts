export class FieldsErrors extends Error {
    constructor(public errors: { [field: string]: string[] }) {
        super(
            Object.entries(errors)
                .map(([, error]) => `${error.join(',')}`)
                .join('\n'),
        );
    }

    public fields(): { field: string; message: string }[] {
        return Object.keys(this.errors).map((field) => ({
            field,
            message: this.errors[field].join(', '),
        }));
    }

    public forField(name: string): string[] {
        return this.errors[name] ?? [];
    }
}
