import {MessageInput, MessageCard} from "@/src/modules/channel";
import {Message} from "@/src/modules/channel/types";
import {AuthenticatedUser} from "@/src/modules/user/types";

export type ChannelMessageProps = {
  user: AuthenticatedUser;
  messages: Message[];
};

export const ChannelMessage = ({messages, user}: ChannelMessageProps) => {
  return (
    <div className="h-full bg-dark-100">
      <div className="h-3/4 overflow-y-auto px-3">
        {messages.map((message) => (
          <MessageCard key={message.id} message={message} self={user} />
        ))}
      </div>

      <div className="h-1/4 p-2">
        <MessageInput />
      </div>
    </div>
  );
};
