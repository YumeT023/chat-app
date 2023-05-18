import {StaticImageData} from "next/image";
import {UserAvatar} from "@/src/modules/user";
import {Flex} from "@/src/ui/box";
import {UserStatus} from "@/src/modules/user/types";
import doge from "@/src/assets/img/doge-meme-icon.jpg";

export type BannerProps = {
  img?: string | StaticImageData;
  bio?: string;
  status: UserStatus;
  name: string;
};

export const Banner = ({name, status = UserStatus.Connected, bio, img}: BannerProps) => {
  return (
    <div className="flex sm:flex-row md:h-full">
      <Flex
        fullSize
        className="flex-col items-center gap-10 border-r border-r-dark-300 bg-dark-100 py-10 sm:w-full md:w-1/2"
      >
        <UserAvatar src={doge} className="h-28 w-28 md:h-60 md:w-60" />
        <div className="rounded-full bg-primary-200 p-3 font-semibold text-dark-300 md:text-2xl">
          {name}
        </div>
      </Flex>
    </div>
  );
};
