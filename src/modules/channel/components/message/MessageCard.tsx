import doge from "@/src/assets/img/doge-meme-icon.jpg";
import {Avatar} from "@/src/ui/avatar";
import {AuthenticatedUser} from "@/src/modules/user/types";
import {Message} from "@/src/modules/channel/types";

export type UserMessageProps = {
  message: Message;
  self: AuthenticatedUser;
};

export const MessageCard = ({message, self}: UserMessageProps) => {
  const {content, sender} = message;
  return (
    <div className={`flex py-2 ${self.id === sender.id ? "justify-end" : ""}`}>
      <div className="rounded-xl rounded-b-xl border border-dark-300 md:w-1/2">
        <div className="flex flex-row items-center gap-2 rounded-t-lg border-dark-300 bg-primary-100 px-2 py-2">
          <Avatar src={self.image || doge} className="h-8 w-8" />
          <div className="text-sm font-semibold capitalize text-primary-200">{sender.name}</div>
        </div>
        <div className=" w-fit rounded-b-xl  p-3 py-3 text-gray-500">{content}</div>
      </div>
    </div>
  );
};
