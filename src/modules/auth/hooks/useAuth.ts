import {AUTH_TOKEN_KEY} from "@/src/modules/auth/constants";
import {AuthPayload} from "@/src/modules/auth/types";
import {toToken} from "@/src/modules/auth/utils/toToken";
import {isWindowObjectAvailable} from "@/src/utils/window";

export const useAuth = () => {
  return {
    authenticate: (payload: AuthPayload) => {
      isWindowObjectAvailable() && localStorage.setItem(AUTH_TOKEN_KEY, toToken(payload));
    },
    getToken: () => {
      return isWindowObjectAvailable() && localStorage.getItem(AUTH_TOKEN_KEY);
    },
    clearToken: () => {
      return isWindowObjectAvailable() && localStorage.removeItem(AUTH_TOKEN_KEY);
    },
  };
};
