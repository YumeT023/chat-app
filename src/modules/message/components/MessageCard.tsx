import {Avatar, StringAvatar} from "@/src/ui/avatar";
import {Message} from "@/src/modules/message/types";
import doge from "@/src/assets/img/doge-meme-icon.jpg";
import {DateField} from "@/src/ui/typography";
import {ComponentPropsWithRef, forwardRef} from "react";

export type UserMessageProps = {
  message: Message;
} & ComponentPropsWithRef<"div">;

export const MessageCard = forwardRef<HTMLDivElement, UserMessageProps>(
  ({message, ...props}, ref) => {
    const {content, sender} = message;
    const grid = {
      display: "grid",
      gridTemplateColumns: "3rem auto",
      gap: 8,
    };

    return (
      <div
        className="mb-1 flex px-3 py-0.5 hover:bg-dark-300 hover:bg-opacity-80"
        ref={ref}
        {...props}
      >
        <div className="px-1 md:w-2/3" style={grid}>
          <StringAvatar str={sender.name} variant="rounded" className="mt-2 h-10 w-11" />

          <div className="flex flex-col gap-1 text-primary-200">
            <div className="flex items-center gap-2">
              <div className="text-lg font-bold capitalize">{sender.name}</div>
              <DateField
                value={new Date(message.createdAt)}
                className="cursor-pointer text-sm font-light text-primary-200 text-opacity-70 hover:underline"
              />
            </div>

            <div className="text-md w-full">{content}</div>
          </div>
        </div>
      </div>
    );
  }
);
