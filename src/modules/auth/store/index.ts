import {create} from "zustand";
import {createJSONStorage, persist} from "zustand/middleware";
import {Nullable, WithLoading} from "@/src/types/utility";
import {CreatePayload, Payload} from "@/src/modules/auth/types";
import {User} from "@/src/modules/user/types";
import {AUTH_TOKEN_KEY} from "@/src/modules/auth/constants";
import {createUser, loginWithEmailAndPassword} from "@/src/modules/auth/store/apiService";

type State = WithLoading<{
  loggedUser: Nullable<User>;
}>;
type Actions = {
  createUser: (user: CreatePayload) => Promise<void>;
  loginUser: (credentials: Payload) => Promise<void>;
  logoutUser: () => void;
};

export const useAuthStore = create<State & Actions>()(
  persist(
    (set) => ({
      isLoading: false,
      loggedUser: null,
      loginUser: async (credentials) => {
        set({loggedUser: null, isLoading: true});
        const user = await loginWithEmailAndPassword(credentials);
        set({loggedUser: user?.data, isLoading: false});
      },
      logoutUser: () => {
        set({loggedUser: null});
      },
      createUser: async (user) => {
        set({loggedUser: null, isLoading: true});
        const created = await createUser(user);
        set({loggedUser: created?.data, isLoading: false});
      },
    }),
    {
      name: AUTH_TOKEN_KEY,
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({loggedUser: state.loggedUser}),
    }
  )
);
