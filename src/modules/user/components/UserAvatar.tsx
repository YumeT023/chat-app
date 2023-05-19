import {FiCircle} from "react-icons/fi";
import {Avatar, AvatarProps} from "@/src/ui/avatar";
import {UserStatus} from "@/src/modules/user/types";
import {auth} from "@/src/store";

export const statusColor = {
  "0": "bg-accent-300",
  "1": "bg-accent-200",
  "2": "bg-accent-400",
};

export type UserAvatarProps = AvatarProps & {
  root?: string;
};

export const UserAvatar = ({root = "", ...props}: UserAvatarProps) => {
  const logged = auth((state) => state.loggedUser);
  const userStatus = logged?.user.status ?? UserStatus.Away;

  return (
    <div className={`relative h-fit w-fit ${root}`}>
      <Avatar {...props} />
      <FiCircle
        className={`absolute bottom-0 right-0 h-4 w-4 cursor-pointer rounded-full ${statusColor[userStatus]}`}
        title={UserStatus[userStatus]}
      />
    </div>
  );
};
