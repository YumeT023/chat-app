import {MainLayout, SidePanel} from "@/src/modules/layout";
import {CreateChannel} from "@/src/modules/channel";

const CreateChannelPage = () => {
  return (
    <MainLayout title="Create a channel" sidePanel={<SidePanel />}>
      <CreateChannel />
    </MainLayout>
  );
};

export default CreateChannelPage;
