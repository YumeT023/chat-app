import {Message} from "@/src/modules/channel/types";
import {globalAxios as axios} from "@/src/conf/axios";
import {Api} from "@/src/types/utility";
import {addAuth} from "@/src/lib/api/utils";
import {formatError} from "@/src/modules/errors/utils";

export const getMessagesByChannel = async (
  token: string,
  channelId: number
): Promise<Message[]> => {
  try {
    return await axios
      .get<Api<Message[], "messages">>(`/messages/channel/${channelId}`, addAuth(token))
      .then(({data}) => data.messages);
  } catch (err: unknown) {
    throw formatError(err);
  }
};
