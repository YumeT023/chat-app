import {globalAxios as axios} from "@/src/conf/axios";
import {formatError} from "@/src/modules/errors/utils";
import {Channel, CreateChannel} from "@/src/modules/channel/types";

export const createChannel = async (toCreate: CreateChannel) => {
  try {
    return await axios.post<Channel>("/channel", toCreate);
  } catch (err: unknown) {
    throw formatError(err);
  }
};
