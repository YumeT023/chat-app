import {Avatar} from "@/src/ui/avatar";
import {AuthenticatedUser} from "@/src/modules/user/types";
import {Message} from "@/src/modules/message/types";
import doge from "@/src/assets/img/doge-meme-icon.jpg";
import {DateField} from "@/src/ui/typography";

export type UserMessageProps = {
  message: Message;
  self: AuthenticatedUser;
};

export const MessageCard = ({message}: UserMessageProps) => {
  const {content, sender} = message;
  const grid = {
    display: "grid",
    gridTemplateColumns: "3rem auto",
    gap: 5
  };

  return (
    <div className="mb-1 flex px-3 py-0.5 hover:bg-dark-300 hover:bg-opacity-80">
      <div className="px-1 md:w-1/2" style={grid}>
        <Avatar src={sender.image || doge} className="h-w-auto w-auto mt-2" variant="rounded" />
        <div className="flex flex-col gap-1 text-primary-200">
          <div className="flex items-center gap-2">
            <div className="text-lg font-bold capitalize">{sender.name}</div>
            <DateField
              value={new Date(message.createdAt)}
              className="cursor-pointer text-sm font-light text-primary-200 text-opacity-70 hover:underline"
            />
          </div>

          <div className="text-md font-light">{content}</div>
        </div>
      </div>
    </div>
  );
};

// <div className="flex flex-row items-center gap-2 rounded-t-lg border-dark-300 bg-primary-100 px-2 py-2">
//   <div className="text-sm font-semibold capitalize text-primary-200">{sender.name}</div>
// </div>
// <div className=" w-fit rounded-b-xl  p-3 py-3 text-gray-500">{content}</div>
