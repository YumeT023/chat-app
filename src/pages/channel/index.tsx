import {MainLayout} from "@/src/modules/layout/components";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import {withAuth} from "@/src/lib/utils";
import {ChannelSidePanel, WhatIsChannel} from "@/src/modules/channel";

const MainChannelPage = ({user}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <MainLayout sidePanel={<ChannelSidePanel user={user} />} title="Channel">
      <WhatIsChannel />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = (context) => {
  return withAuth(context);
};

export default MainChannelPage;
