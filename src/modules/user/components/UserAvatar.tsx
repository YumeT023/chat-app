import {Avatar, AvatarProps} from "@/src/ui/avatar";
import {UserStatus} from "@/src/modules/user/types";

export const statusColor = {
  "0": "bg-blue-300",
  "1": "bg-red-400",
  "2": "bg-green-400",
};

export type UserAvatarProps = AvatarProps & {
  statusIndex: keyof typeof statusColor;
};

export const UserAvatar = ({statusIndex = "0", ...props}: UserAvatarProps) => {
  return (
    <div className="relative">
      <Avatar {...props} />
      <div
        className={`rounded-full absolute right-0 bottom-3 w-4 h-4 ${statusColor[statusIndex]} border-2 border-black cursor-pointer`}
        title={UserStatus[statusIndex] ?? UserStatus["Away"]}
      ></div>
    </div>
  );
};
