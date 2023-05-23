import {Banner} from "@/src/modules/user";
import {User} from "@/src/modules/user/types";

export type ProfileProps = {
  user: User;
};

export const Profile = ({user}: ProfileProps) => {
  return (
    <div className="h-full w-full">
      <Banner
        name={user.name}
        email={user.email}
        status={user.status as any}
        img={user?.image}
        bio={user?.bio}
      />
    </div>
  );
};
