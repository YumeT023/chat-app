import {create} from "zustand";
import {createJSONStorage, persist} from "zustand/middleware";
import {Nullable} from "@/src/types/utility";
import {CreatePayload, Payload} from "@/src/modules/auth/types";
import {User} from "@/src/modules/user/types";
import {AUTH_TOKEN_KEY} from "@/src/modules/auth/constants";
import {createUser, loginWithEmailAndPassword} from "@/src/modules/auth/store/apiService";

type State = {
  loggedUser: Nullable<User>;
};
type Actions = {
  createUser: (user: CreatePayload) => Promise<void>;
  loginUser: (credentials: Payload) => Promise<void>;
  logoutUser: () => void;
};

export const useAuthStore = create<State & Actions>()(
  persist(
    (set) => ({
      loggedUser: null,
      loginUser: async (credentials) => {
        const user = await loginWithEmailAndPassword(credentials);
        set({loggedUser: user?.data});
      },
      logoutUser: () => {
        set({loggedUser: null});
      },
      createUser: async (user) => {
        const created = await createUser(user);
        set({loggedUser: created?.data});
      },
    }),
    {
      name: AUTH_TOKEN_KEY,
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({loggedUser: state.loggedUser}),
    }
  )
);
