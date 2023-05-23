import {create} from "zustand";
import {destroyCookie, setCookie} from "nookies";
import {WithLoading} from "@/src/types/utility";
import {CreatePayload, Payload} from "@/src/modules/auth/types";
import {createUser, loginUser} from "@/src/lib/api";

type State = WithLoading<{}>;
type Actions = {
  createUser: (user: CreatePayload) => Promise<void>;
  loginUser: (credentials: Payload) => Promise<void>;
  logoutUser: () => void;
};

export const auth = create<State & Actions>()((set) => ({
  isLoading: false,
  loginUser: async (credentials) => {
    set({isLoading: true});
    try {
      const user = await loginUser(credentials);
      setCookie(null, "user", JSON.stringify(user));
      set({isLoading: false});
    } catch (e) {
      set({isLoading: false});
      throw e;
    }
  },
  logoutUser: () => {
    destroyCookie(null, "user");
  },
  createUser: async (user) => {
    set({isLoading: true});
    try {
      const created = await createUser(user);
      setCookie(null, "user", JSON.stringify(created));
      set({isLoading: false});
    } catch (e) {
      set({isLoading: false});
    }
  },
}));
