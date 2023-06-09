import {User, UserStatus as Status} from "@/src/modules/user/types";
import {StringAvatar} from "@/src/ui/avatar";
import {Flex} from "@/src/ui/box";
import {VscMail} from "react-icons/vsc";
import {FiCircle} from "react-icons/fi";

type UserProps<P = {}> = {
  user: User;
} & P;

const Banner = ({user}: UserProps) => {
  const {name, bio = ""} = user;

  return (
    <Flex
      fullSize
      className="xl:w64 flex-col items-center gap-10 border-r border-r-dark-300 bg-dark-100 py-10"
    >
      <div className={`relative h-fit w-fit`}>
        <StringAvatar
          str={name}
          variant="circle"
          className="h-28 w-28 md:h-56 md:w-56"
          innerCls="text-6xl font-mono"
        />
      </div>

      <div className="max-w-sm text-center text-sm font-semibold  text-primary-200">{bio}</div>
      <div className="rounded-full bg-primary-200 p-3 font-semibold text-dark-300 md:text-2xl">
        {name}
      </div>
    </Flex>
  );
};

const statusColor = {
  "0": "bg-accent-300",
  "1": "bg-accent-200",
  "2": "bg-accent-400",
};

const UserStatus = ({status}: Pick<User, "status">) => {
  return (
    <FiCircle
      className={`h-4 w-4 cursor-pointer rounded-full ${statusColor[status]}`}
      title={Status[status]}
    />
  );
};

const UserInfo = ({user}: UserProps) => {
  const {status, email} = user;

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

export const Profile = ({user}: UserProps) => {
  return (
    <div className="h-full w-full">
      <div className="flex h-full flex-col md:flex-row">
        <Banner user={user} />
        <UserInfo user={user} />
      </div>
    </div>
  );
};
