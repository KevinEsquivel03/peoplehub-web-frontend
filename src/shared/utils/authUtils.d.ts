import type { AuthResponse } from "../../features/auth/model/types";
export declare const storeTokens: (response: AuthResponse) => void;
export declare const removeTokens: () => void;
export declare const getAccessToken: () => string | null;
export declare const getRefreshToken: () => string | null;
export declare const getTokenExpiry: () => number;
