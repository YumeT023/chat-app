import {globalAxios as axios} from "@/src/conf/axios";
import {formatError} from "@/src/modules/errors/utils";
import {Channel, ChannelList, CreateChannel} from "@/src/modules/channel/types";
import {addAuth, reshapeData} from "@/src/lib/api/utils";
import {Api} from "@/src/types/utility";

export const createChannel = async (token: string, toCreate: CreateChannel) => {
  try {
    return await axios
      .post<Api<Channel, "channel">>("/channel", toCreate, addAuth(token))
      .then((res) => reshapeData(res.data, "channel"));
  } catch (err: unknown) {
    throw formatError(err);
  }
};

export const getChannelById = async (token: string, id: number) => {
  try {
    return await axios
      .get<Api<Channel, "channel">>(`/channel/${id}`, addAuth(token))
      .then((res) => reshapeData(res.data, "channel"));
  } catch (err: unknown) {
    throw formatError(err);
  }
};

export const getChannels = async (token: string) => {
  try {
    return await axios
      .get<Api<ChannelList, "channels">>(`/channels`, addAuth(token))
      .then((res) => reshapeData(res.data, "channels"));
  } catch (err: unknown) {
    throw formatError(err);
  }
};
