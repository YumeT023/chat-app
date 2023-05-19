import {StaticImageData} from "next/image";
import {UserAvatar} from "@/src/modules/user";
import doge from "@/src/assets/img/doge-meme-icon.jpg";

export type BannerProps = {
  img?: string | StaticImageData;
  bio?: string;
  statusIndication: "0" | "1" | "2";
  name: string;
};

export const Banner = ({name, statusIndication, bio, img}: BannerProps) => {
  return (
    <div className="w-full">
      <div className="relative mb-10 h-24">
        <div className="absolute left-1/2 top-1/3 h-24 w-24 -translate-x-1/2 transform sm:left-28 sm:translate-x-0">
          <UserAvatar
            src={img || doge}
            className="h-full w-full rounded-full border-2 border-gray-50"
            statusIndex={statusIndication}
          />
        </div>
      </div>

      <div className="py-1">
        {bio && <div className="text-md mb-4 py-1 text-center italic">{bio}</div>}
        <div className="text-md m-auto mt-2 w-fit rounded-full bg-amber-300 p-1 font-semibold sm:ml-28">
          @{name}
        </div>
      </div>
    </div>
  );
};
