import {MessageCard, MessageInput} from "@/src/modules/message";
import {Message} from "@/src/modules/message/types";
import {AuthenticatedUser} from "@/src/modules/user/types";
import {Channel} from "@/src/modules/channel/types";
import {sendMessageToChannel} from "@/src/lib/api";
import useSWRMutation from "swr/mutation";
import {Key} from "swr";

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
    const res = await trigger({channelId: channel.id, content: content});
    console.log("sent: ", res);
  };

  return (
    <div className="h-full bg-dark-250">
      <div className="h-3/4 overflow-y-auto py-1">
        {messages.length ? (
          messages.map((message) => <MessageCard key={message.id} message={message} self={user} />)
        ) : (
          <div className="p-4 text-sm  text-primary-200 text-opacity-80">
            No message in this channel
          </div>
        )}
      </div>

      <div className="h-1/4 p-2">
        <MessageInput onSend={handleSendMessage} />
      </div>
    </div>
  );
};
