import {MainLayout} from "@/src/modules/layout/components";
import {ChannelSidePanel, WhatIsChannel} from "@/src/modules/channel";
import {GetServerSideProps} from "next";
import {withAuth} from "@/src/lib/utils";

const MainChannelPage = () => {
  return (
    <MainLayout sidePanel={<ChannelSidePanel />} title="Channel">
      <WhatIsChannel />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = (context) => withAuth(context);

export default MainChannelPage;
