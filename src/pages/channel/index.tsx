import {MainLayout, SidePanel} from "@/src/modules/layout/components";
import {WhatIsChannel} from "@/src/modules/channel";
import {Authenticated} from "@/src/modules/auth/utils/Authenticated";

const MainChannelPage = () => {
  return (
    <Authenticated>
      <MainLayout sidePanel={<SidePanel />} title="Channel">
        <WhatIsChannel />
      </MainLayout>
    </Authenticated>
  );
};

export default MainChannelPage;
