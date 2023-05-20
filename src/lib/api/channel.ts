import {globalAxios as axios} from "@/src/conf/axios";
import {formatError} from "@/src/modules/errors/utils";
import {Channel, ChannelList, CreateChannel} from "@/src/modules/channel/types";

export const createChannel = async (toCreate: CreateChannel) => {
  try {
    return await axios.post<Channel>("/channel", toCreate);
  } catch (err: unknown) {
    throw formatError(err);
  }
};

export const getChannelById = async (id: number) => {
  try {
    return await axios.get<Channel>(`/channel/${id}`);
  } catch (err: unknown) {
    throw formatError(err);
  }
};

export const getChannels = async () => {
  try {
    return await axios.get<ChannelList>(`/channels`);
  } catch (err: unknown) {
    throw formatError(err);
  }
};
