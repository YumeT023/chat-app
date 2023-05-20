import {MainLayout} from "@/src/modules/layout/components";
import {ChannelSidePanel, WhatIsChannel} from "@/src/modules/channel";

const MainChannelPage = () => {
  return (
    <MainLayout sidePanel={<ChannelSidePanel />} title="Channel">
      <WhatIsChannel />
    </MainLayout>
  );
};

export default MainChannelPage;
