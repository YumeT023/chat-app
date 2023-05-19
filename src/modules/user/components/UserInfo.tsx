import {VscMail} from "react-icons/vsc";
import {Flex} from "@/src/ui/box";
import {UserStatus} from "@/src/modules/user";
import {UserStatus as Status} from "@/src/modules/user/types";

export type UserInfoProps = {
  status: Status;
  email: string;
};

export const UserInfo = ({status, email}: UserInfoProps) => {
  return (
    <div className="h-full w-full p-3">
      <div className="border-b border-b-dark-300 px-1">
        <Flex className="items-center gap-3 py-2">
          <UserStatus status={status} />
          <div className="text-primary-200">{Status[status]}</div>
        </Flex>
      </div>

      <div className="mt-4 max-h-fit text-primary-200">
        <div className="text-xl">Contact information</div>

        <div className="mt-3">
          <Flex className="items-center gap-3 py-3">
            <Flex className="h-8 w-8 rounded-md bg-dark-300" center>
              <VscMail className="text-2xl" />
            </Flex>
            <div className="text-sm">
              <div className="text-primary-200">Email Address</div>
              <div className="text-accent-100">{email}</div>
            </div>
          </Flex>
        </div>
      </div>
    </div>
  );
};
