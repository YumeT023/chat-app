import {MainLayout, SidePanel} from "@/src/modules/layout";
import {CreateChannel} from "@/src/modules/channel";
import {Authenticated} from "@/src/modules/auth/utils/Authenticated";

const CreateChannelPage = () => {
  return (
    <Authenticated>
      <MainLayout title="Create a channel" sidePanel={<SidePanel />}>
        <CreateChannel />
      </MainLayout>
    </Authenticated>
  );
};

export default CreateChannelPage;
