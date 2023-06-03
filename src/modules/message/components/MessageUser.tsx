import {AuthenticatedUser, User} from "@/src/modules/user/types";
import {MessageView} from "@/src/modules/message";
import {Message} from "@/src/modules/message/types";
import {sendMessageToRecipient} from "@/src/lib/api";
import {Key} from "swr";
import useSWRMutation from "swr/mutation";

export type MessageUserProps = {
  user: AuthenticatedUser;
  recipient: User;
  messages: Message[];
};

const sendMessageMutation = <T = Key,>(token: string) => {
  return async (key: T, {arg}: {arg: any}) =>
    (await sendMessageToRecipient(token, arg.recipientId, arg.content)) as Message;
};

export const MessageUser = ({user, recipient, messages = []}: MessageUserProps) => {
  const {
    error: sendMessageError,
    trigger,
    isMutating,
  } = useSWRMutation(`/channel`, sendMessageMutation(user.token));

  const handleSendMessage = async (content: string) => {
    await trigger({
      recipientId: recipient.id,
      content,
    });
  };

  return (
    <MessageView
      onSendMessage={handleSendMessage}
      messages={messages}
      fallbackText={`No messages with ${recipient.name}`}
    />
  );
};
