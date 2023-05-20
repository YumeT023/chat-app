import {create} from "zustand";
import {WithLoading} from "@/src/types/utility";
import {User} from "@/src/modules/user/types";
import {getUsers} from "@/src/lib/api";

type State = WithLoading<{
  users: User[];
}>;
type Actions = {
  getAll: () => Promise<void>;
};

export const user = create<State & Actions>()((set) => ({
  isLoading: false,
  users: [],
  getAll: async () => {
    set({isLoading: true});
    try {
      const usersWithStatus = await getUsers();
      set({isLoading: false, users: usersWithStatus.data.users});
    } catch (e) {
      set({isLoading: false});
      throw e;
    }
  },
}));
