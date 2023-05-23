import {MainLayout, SidePanel} from "@/src/modules/layout";
import {Authenticated} from "@/src/modules/auth/utils/Authenticated";
import {Profile} from "@/src/modules/user";
import {GetServerSideProps} from "next";
import {User} from "@/src/modules/user/types";
import {withAuth} from "@/src/lib/utils";

type ViewProfilePageProps = {
  user: User;
};

const ViewProfilePage = ({user}: ViewProfilePageProps) => {
  return (
    <Authenticated>
      <MainLayout
        sidePanel={<SidePanel />}
        rootClass="flex items-center justify-center h-full"
        title={"Profile"}
      >
        <Profile user={user} />
      </MainLayout>
    </Authenticated>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return withAuth(context);
};

export default ViewProfilePage;
