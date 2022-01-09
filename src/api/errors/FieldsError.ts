export class FieldsErrors extends Error {
    constructor(public errors: { [field: string]: string[] }) {
        super(
            Object.entries(errors)
                .map(([, error]) => `${error.join(',')}`)
                .join('\n'),
        );
    }

    public forField(name: string): string[] {
        return this.errors[name] ?? [];
    }
}
