import {Message} from "@/src/modules/message/types";
import {globalAxios as axios} from "@/src/conf/axios";
import {Api} from "@/src/types/utility";
import {addAuth} from "@/src/lib/api/utils";
import {formatError} from "@/src/modules/errors";

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

type MessagePayload = {
  content: string;
} & Partial<Pick<Message, "channelId" | "recipientId">>;

const sendMessage = async (token: string, payload: MessagePayload): Promise<Message> => {
  try {
    return await axios
      .post<Api<Message, "message">>(`/message`, payload, addAuth(token))
      .then(({data}) => data.message);
  } catch (err: unknown) {
    throw formatError(err);
  }
};

export const getMessagesByUser = async (token: string, uid: number) => {
  try {
    return await axios
      .get<Api<Message[], "messages">>(`/messages/${uid}`, addAuth(token))
      .then(({data}) => data.messages);
  } catch (err: unknown) {
    throw formatError(err);
  }
};

export const sendMessageToChannel = async (token: string, channelId: number, content: string) => {
  try {
    return await sendMessage(token, {
      channelId,
      content,
    });
  } catch (err: unknown) {
    throw formatError(err);
  }
};

export const sendMessageToRecipient = async (
  token: string,
  recipientId: number,
  content: string
) => {
  try {
    return await sendMessage(token, {
      recipientId,
      content,
    });
  } catch (err: unknown) {
    throw formatError(err);
  }
};
