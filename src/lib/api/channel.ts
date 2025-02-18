import {globalAxios as axios} from "@/src/conf/axios";
import {formatError} from "@/src/modules/errors";
import {Channel, CreateChannel} from "@/src/modules/channel/types";
import {addAuth} from "@/src/lib/api/utils";
import {Api} from "@/src/types/utility";

export const createChannel = async (token: string, toCreate: CreateChannel): Promise<Channel> => {
  try {
    return await axios
      .post<Api<Channel, "channel">>("/channel", toCreate, addAuth(token))
      .then(({data}) => data.channel);
  } catch (err: unknown) {
    throw formatError(err);
  }
};

export const addMembersToChannel = async (
  token: string,
  channelId: number,
  members: number[]
): Promise<Channel> => {
  try {
    return await axios
      .post<any>(
        `/channels/${channelId}/members`,
        {
          members,
        },
        addAuth(token)
      )
      .then(({data}) => data);
  } catch (err: unknown) {
    throw formatError(err);
  }
};

export const getChannelById = async (token: string, id: number): Promise<Channel> => {
  try {
    return await axios
      .get<Api<Channel, "channel">>(`/channel/${id}`, addAuth(token))
      .then(({data}) => data.channel);
  } catch (err: unknown) {
    throw formatError(err);
  }
};

export const getChannels = async (token: string): Promise<Channel[]> => {
  try {
    return await axios
      .get<Api<Channel[], "channels">>(`/channels`, addAuth(token))
      .then(({data}) => data.channels);
  } catch (err: unknown) {
    throw formatError(err);
  }
};
