import {MainLayout, SidePanel} from "@/src/modules/layout/components";
import {WhatIsChannel} from "@/src/modules/channel";

const ChannelPage = () => {
  return (
    <MainLayout sidePanel={<SidePanel />} title="Channel">
      <WhatIsChannel />
    </MainLayout>
  );
};

export default ChannelPage;
