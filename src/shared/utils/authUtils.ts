import type { AuthResponse } from "../../features/auth/model/types";

export const storeTokens = (response: AuthResponse) => {
  localStorage.setItem("accessToken", response.access_token);
  localStorage.setItem("refreshToken", response.refresh_token || "");
  localStorage.setItem("user", JSON.stringify(response.user));
  localStorage.setItem(
    "expiresAt",
    String(Date.now() + response.expires_in * 1000),
  );
};

export const removeTokens = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("user");
  localStorage.removeItem("expiresAt");
};

export const getAccessToken = () => localStorage.getItem("accessToken");
export const getRefreshToken = () => localStorage.getItem("refreshToken");
export const getTokenExpiry = () => Number(localStorage.getItem("expiresAt"));
