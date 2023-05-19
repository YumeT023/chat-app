import {FiCircle} from "react-icons/fi";
import {UserStatus as Status} from "@/src/modules/user/types";

export const statusColor = {
  "0": "bg-accent-300",
  "1": "bg-accent-200",
  "2": "bg-accent-400",
};

export type UserStatusProps = {
  status: Status;
  className?: string;
};

export const UserStatus = ({status, className = ""}: UserStatusProps) => {
  return (
    <FiCircle
      className={`h-4 w-4 cursor-pointer rounded-full ${statusColor[status]} ${className}`}
      title={Status[status]}
    />
  );
};
