import { AuthApi } from "../../features/auth/api/authApi";
export const authProcess = async (credentials) => {
  try {
    const response = await AuthApi.loginUser(credentials);
    return response;
  } catch (error) {
    throw new Error("Error en el proceso de autenticación", { cause: error });
  }
};
