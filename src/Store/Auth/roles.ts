export enum Role {
    Any = 0,
    Guest = 1,
    User = 2,
    Admin = 4,
}

export function hasRole(flag: number, role: Role): boolean {
    return (flag & role) === role;
}
