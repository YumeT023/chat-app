import {MessageCard, MessageInput} from "@/src/modules/message";
import {Message} from "@/src/modules/message/types";
import {AuthenticatedUser} from "@/src/modules/user/types";

export type ChannelMessageProps = {
  user: AuthenticatedUser;
  messages: Message[];
};

export const ChannelMessage = ({messages, user}: ChannelMessageProps) => {
  const handleSendMessage = (message: string) => {
    console.log("onSend(", message, ")");
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
