import {AUTH_TOKEN_KEY} from "@/src/modules/auth/constants";
import {AuthPayload} from "@/src/modules/auth/types";
import {toToken} from "@/src/modules/auth/utils/toToken";
import {isWindowObjectAvailable} from "@/src/utils/window";

export const useAuth = () => {
  const getToken = () => {
    return isWindowObjectAvailable() && localStorage.getItem(AUTH_TOKEN_KEY);
  };

  return {
    authenticate: (payload: AuthPayload) => {
      isWindowObjectAvailable() && localStorage.setItem(AUTH_TOKEN_KEY, toToken(payload));
    },
    checkAuth: () => !!getToken(),
    clearToken: () => {
      return isWindowObjectAvailable() && localStorage.removeItem(AUTH_TOKEN_KEY);
    },
  };
};
