import {create} from "zustand";
import {Nullable} from "@/src/utils/optional";
import {LoggedUser, Payload} from "@/src/modules/auth/types";
import {loginUserWithEmailAndPassword} from "@/src/modules/auth/store/apiService";

type State = {
  loggedUser: Nullable<LoggedUser>;
};
type Actions = {
  loginUser: (payload: Payload) => Promise<void>;
  logoutUser: () => void;
};

export const useAuthStore = create<State & Actions>((set) => ({
  loggedUser: null,
  loginUser: async ({email, password}) => {
    const user = await loginUserWithEmailAndPassword(email, password);
    set({loggedUser: user?.data});
  },
  logoutUser: () => {
    set({loggedUser: null});
  },
}));
