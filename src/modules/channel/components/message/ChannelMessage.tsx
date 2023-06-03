import {MessageView} from "@/src/modules/message";
import {Message} from "@/src/modules/message/types";
import {AuthenticatedUser} from "@/src/modules/user/types";
import {Channel} from "@/src/modules/channel/types";
import {sendMessageToChannel} from "@/src/lib/api";
import {Key} from "swr";
import useSWRMutation from "swr/mutation";
import {useEffect} from "react";

export type ChannelMessageProps = {
  channel: Channel;
  user: AuthenticatedUser;
  messages: Message[];
};

const sendMessageMutation = <T = Key,>(token: string) => {
  return async (key: T, {arg}: {arg: any}) =>
    (await sendMessageToChannel(token, arg.channelId, arg.content)) as Message;
};

export const ChannelMessage = ({messages, user, channel}: ChannelMessageProps) => {
  const {
    error: sendMessageError,
    trigger,
    isMutating,
  } = useSWRMutation(`/channel`, sendMessageMutation(user.token));

  const handleSendMessage = async (content: string) => {
    await trigger({channelId: channel.id, content: content});
  };

  return (
    <MessageView
      messages={messages}
      onSendMessage={handleSendMessage}
      fallbackText="No messages in this channel"
    />
  );
};
