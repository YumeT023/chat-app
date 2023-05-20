import doge from "@/src/assets/img/doge-meme-icon.jpg";
import {Avatar} from "@/src/ui/avatar";

export type UserMessageProps = {
  content: string;
};

export const UserMessage = ({content}: UserMessageProps) => {
  return (
    <div className="flex py-2">
      <div className="rounded-xl rounded-b-xl border border-dark-300 md:w-1/2">
        <div className="flex flex-row items-center gap-2 rounded-t-lg border-dark-300 bg-primary-100 px-2 py-2">
          <Avatar src={doge} className="h-8 w-8" />
          <div className="text-sm font-semibold text-primary-200">yumii.saiko</div>
        </div>
        <div className=" w-fit rounded-b-xl  p-3 py-3 text-gray-500">{content}</div>
      </div>
    </div>
  );
};
