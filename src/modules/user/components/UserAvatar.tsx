import {Avatar, AvatarProps} from "@/src/ui/avatar";
import {UserStatus as Status} from "@/src/modules/user/types";
import {UserStatus} from "@/src/modules/user";

export type UserAvatarProps = AvatarProps & {
  root?: string;
  status: Status;
};

export const UserAvatar = ({status, root = "", ...props}: UserAvatarProps) => {
  return (
    <div className={`relative h-fit w-fit ${root}`}>
      <Avatar {...props} />
      <UserStatus status={status} className="absolute bottom-0 right-0" />
    </div>
  );
};
