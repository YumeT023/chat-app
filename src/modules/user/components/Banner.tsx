import {StaticImageData} from "next/image";
import doge from "@/src/assets/img/doge-meme-icon.jpg";
import {UserAvatar} from "@/src/modules/user";

export type BannerProps = {
  img?: string | StaticImageData;
  bio?: string;
  statusIndication: "0" | "1" | "2";
  name: string;
};

export const Banner = ({name, statusIndication, bio, img = doge}: BannerProps) => {
  return (
    <div className="w-full">
      <div className="h-24 relative mb-10">
        <div className="absolute top-1/3 left-1/2 h-24 w-24 transform -translate-x-1/2 sm:translate-x-0 sm:left-28">
          <UserAvatar
            src={img}
            className="h-full w-full border-2 border-gray-50 rounded-full"
            statusIndex={statusIndication}
          />
        </div>
      </div>

      <div className="py-1">
        {bio && <div className="text-md mb-4 text-center py-1 italic">{bio}</div>}
        <div className="text-md mt-2 p-1 w-fit m-auto sm:ml-28 font-semibold rounded-full bg-amber-300">
          @{name}
        </div>
      </div>
    </div>
  );
};
