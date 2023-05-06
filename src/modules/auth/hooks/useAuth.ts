import {AUTH_TOKEN_KEY} from "@/src/modules/auth/constants";
import {AuthPayload} from "@/src/modules/auth/types";
import {toToken} from "@/src/modules/auth/utils/toToken";

export const useAuth = () => {
  return {
    authenticate: (payload: AuthPayload) => {
      localStorage.setItem(AUTH_TOKEN_KEY, toToken(payload));
    },
    getToken: () => {
      return localStorage.getItem(AUTH_TOKEN_KEY);
    },
    clearToken: () => {
      return localStorage.removeItem(AUTH_TOKEN_KEY);
    },
  };
};
