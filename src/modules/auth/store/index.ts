import {create} from "zustand";
import {createJSONStorage, persist} from "zustand/middleware";
import {Nullable} from "@/src/utils/optional";
import {Payload} from "@/src/modules/auth/types";
import {User} from "@/src/modules/user/types";
import {AUTH_TOKEN_KEY} from "@/src/modules/auth/constants";
import {loginWithEmailAndPassword} from "@/src/modules/auth/store/apiService";

type State = {
  loggedUser: Nullable<User>;
};
type Actions = {
  loginUser: (payload: Payload) => Promise<void>;
  logoutUser: () => void;
};

export const useAuthStore = create<State & Actions>()(
  persist(
    (set) => ({
      loggedUser: null,
      loginUser: async ({email, password}) => {
        const user = await loginWithEmailAndPassword(email, password);
        set({loggedUser: user?.data});
      },
      logoutUser: () => {
        set({loggedUser: null});
      },
    }),
    {
      name: AUTH_TOKEN_KEY,
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({loggedUser: state.loggedUser}),
    }
  )
);
