import {create} from "zustand";
import {createJSONStorage, persist} from "zustand/middleware";
import {Nullable, WithLoading} from "@/src/types/utility";
import {CreatePayload, LoggedUser, Payload} from "@/src/modules/auth/types";
import {AUTH_TOKEN_KEY} from "@/src/modules/auth/constants";
import {createUser, loginUser} from "@/src/lib/api";

type State = WithLoading<{
  loggedUser: Nullable<LoggedUser>;
}>;
type Actions = {
  createUser: (user: CreatePayload) => Promise<void>;
  loginUser: (credentials: Payload) => Promise<void>;
  logoutUser: () => void;
};

export const auth = create<State & Actions>()(
  persist(
    (set) => ({
      isLoading: false,
      loggedUser: null,
      loginUser: async (credentials) => {
        set({loggedUser: null, isLoading: true});
        try {
          const user = await loginUser(credentials);
          set({loggedUser: user?.data, isLoading: false});
        } catch (e) {
          set({isLoading: false});
          throw e;
        }
      },
      logoutUser: () => {
        set({loggedUser: null});
      },
      createUser: async (user) => {
        set({loggedUser: null, isLoading: true});
        try {
          const created = await createUser(user);
          set({loggedUser: created?.data, isLoading: false});
        } catch (e) {
          set({isLoading: false});
        }
      },
    }),
    {
      name: AUTH_TOKEN_KEY,
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({loggedUser: state.loggedUser}),
    },
  ),
);
