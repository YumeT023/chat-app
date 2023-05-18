import {Avatar, AvatarProps} from "@/src/ui/avatar";
import {UserStatus} from "@/src/modules/user/types";

export const statusColorClasses = {
  "0": "bg-primary-200",
  "1": "bg-primary-400",
  "2": "bg-primary-400",
};

export type UserAvatarProps = AvatarProps & {
  userStatus: UserStatus;
  rounded?: boolean;
};

export const UserAvatar = ({userStatus = UserStatus.Away, ...props}: UserAvatarProps) => {
  const statusText = UserStatus[userStatus] ?? "Away";
  const statusColor = statusColorClasses[userStatus];
  return (
    <div className="relative">
      <Avatar {...props} />
      <div
        className={`rounded-full absolute right-0 bottom-3 w-4 h-4 cursor-pointer bg-primary-200 ${statusColor}`}
        title={statusText}
      ></div>
    </div>
  );
};
