import {Avatar} from "@/src/ui/avatar";
import doge from "@/src/assets/img/doge-meme-icon.jpg";
import {auth} from "@/src/store";
import {LoggedUser} from "@/src/modules/auth/types";

export const Profile = () => {
  const {user} = auth((state) => state.loggedUser) as LoggedUser;

  return (
    <div className="h-full w-full">
      <div className="h-24 relative bg-amber-400 mb-10">
        <div className="absolute top-1/3 left-1/2 h-24 w-24 transform -translate-x-1/2 sm:translate-x-0 sm:left-28">
          <Avatar src={doge} className="h-full w-full border-2 border-amber-700 rounded-full" />
        </div>
      </div>

      <div className="py-1">
        {user.bio && <div className="text-md mb-4 text-center py-1 italic">{user.bio}</div>}
        <div className="m-auto text-md mt-2 p-1 w-fit text-center font-semibold rounded-full bg-amber-300">
          @{user.name}
        </div>
      </div>
    </div>
  );
};
