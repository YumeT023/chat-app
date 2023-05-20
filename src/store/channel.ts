import {WithLoading} from "@/src/types/utility";
import {Channel, ChannelList, CreateChannel} from "@/src/modules/channel/types";
import {create} from "zustand";
import {createChannel, getChannelById, getChannels} from "@/src/lib/api";

type State = WithLoading<{
  channels: ChannelList;
}>;
type Actions = {
  create: (toCreate: CreateChannel) => Promise<Channel>;
  getById: (id: number) => Promise<Channel>;
  getAll: () => Promise<void>;
};

export const channel = create<State & Actions>()((set) => ({
  isLoading: false,
  channels: {
    channels: [],
    status: false,
  },
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
  getAll: async () => {
    set({isLoading: true});
    try {
      const res = await getChannels();
      console.log("channels> ", res.data);
      set({isLoading: false, channels: res.data});
    } catch (e) {
      set({isLoading: false});
      throw e;
    }
  },
}));
