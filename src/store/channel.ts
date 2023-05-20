import {WithLoading} from "@/src/types/utility";
import {Channel, CreateChannel} from "@/src/modules/channel/types";
import {create} from "zustand";
import {createChannel, getChannelById} from "@/src/lib/api";

type State = WithLoading<{}>;
type Actions = {
  create: (toCreate: CreateChannel) => Promise<Channel>;
  getById: (id: number) => Promise<Channel>;
};

export const channel = create<State & Actions>()((set) => ({
  isLoading: false,
  create: async (toCreate) => {
    set({isLoading: true});
    try {
      const channel = await createChannel(toCreate);
      set({isLoading: false});
      return channel.data;
    } catch (e) {
      set({isLoading: false});
      throw e;
    }
  },
  getById: async (id) => {
    set({isLoading: true});
    try {
      const channel = await getChannelById(id);
      set({isLoading: false});
      return channel.data;
    } catch (e) {
      set({isLoading: false});
      throw e;
    }
  },
}));
