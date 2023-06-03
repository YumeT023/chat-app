import {MessageCard, MessageInput} from "@/src/modules/message";
import {Message} from "@/src/modules/message/types";

export type MessageViewProps = {
  fallbackText?: string;
  messages: Message[];
  onSendMessage: (content: string) => void;
};

export const MessageView = ({onSendMessage, messages = [], fallbackText = "No messages"}: MessageViewProps) => {
  return (
    <div className="h-full bg-dark-250">
      <div className="h-3/4 overflow-y-auto py-1">
        {messages.length ? (
          messages.map((message) => <MessageCard key={message.id} message={message} />)
        ) : (
          <div className="p-4 text-sm  text-primary-200 text-opacity-80">
            {fallbackText}
          </div>
        )}
      </div>

      <div className="h-1/4 p-2">
        <MessageInput onSend={onSendMessage} />
      </div>
    </div>
  );
};
