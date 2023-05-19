import {StaticImageData} from "next/image";
import {UserAvatar} from "@/src/modules/user";
import {Flex} from "@/src/ui/box";
import {UserStatus} from "@/src/modules/user/types";
import {UserInfo} from "@/src/modules/user/components/UserInfo";
import doge from "@/src/assets/img/doge-meme-icon.jpg";

export type BannerProps = {
  name: string;
  email: string;
  status: UserStatus;
  img?: string | StaticImageData;
  bio?: string;
};

export const Banner = ({name, email, status = UserStatus.Connected}: BannerProps) => {
  return (
    <div className="flex h-full flex-col md:flex-row">
      <Flex
        fullSize
        className="xl:w64 flex-col items-center gap-10 border-r border-r-dark-300 bg-dark-100 py-10"
      >
        <UserAvatar src={doge} className="h-28 w-28 md:h-60 md:w-60" status={status} />
        <div className="rounded-full bg-primary-200 p-3 font-semibold text-dark-300 md:text-2xl">
          {name}
        </div>
      </Flex>
      <UserInfo status={status} email={email} />
    </div>
  );
};
