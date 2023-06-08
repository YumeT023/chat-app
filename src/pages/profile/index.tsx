import {MainLayout, SidePanel} from "@/src/modules/layout";
import {Profile} from "@/src/modules/user";
import {GetServerSideProps} from "next";
import {User} from "@/src/modules/user/types";
import {withAuth} from "@/src/lib/utils";

type ViewProfilePageProps = {
  user: User;
};

const ViewProfilePage = ({user}: ViewProfilePageProps) => {
  return (
    <MainLayout
      sidePanel={<SidePanel username={user.name} />}
      rootClass="flex items-center justify-center h-full"
      title={"Profile"}
    >
      <Profile user={user} />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return withAuth(context);
};

export default ViewProfilePage;
