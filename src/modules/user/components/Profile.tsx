import {auth} from "@/src/store";
import {LoggedUser} from "@/src/modules/auth/types";
import {Banner} from "@/src/modules/user";

export const Profile = () => {
  const {user} = auth((state) => state.loggedUser) as LoggedUser;

  return (
    <div className="h-full w-full">
      <Banner
        img={user.image}
        bio={user.bio}
        name={user.name}
        statusIndication={user.status as any}
      />
    </div>
  );
};
