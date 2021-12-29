export type AuthContextType = {
    user?: string;
    refreshToken?: string;
    accessToken?: string;
};
export const initialState: AuthContextType = {};
