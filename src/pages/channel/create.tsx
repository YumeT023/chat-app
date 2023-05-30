import {MainLayout, SidePanel} from "@/src/modules/layout";
import {CreateChannel} from "@/src/modules/channel";
import {GetServerSideProps} from "next";
import {withAuth} from "@/src/lib/utils";
import {AuthenticatedUser} from "@/src/modules/user/types";

type CreateChannelPageProps = {
  user: AuthenticatedUser;
};

const CreateChannelPage = ({user}: CreateChannelPageProps) => {
  return (
    <MainLayout title="Create a channel" sidePanel={<SidePanel />}>
      <CreateChannel user={user} />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = (context) => withAuth(context);

export default CreateChannelPage;
