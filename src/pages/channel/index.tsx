import {MainLayout, SidePanel} from "@/src/modules/layout/components";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import {withAuth} from "@/src/lib/utils";
import {WhatIsChannel} from "@/src/modules/channel";

const MainChannelPage = ({user}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <MainLayout sidePanel={<SidePanel user={user} />} title="Channel">
      <WhatIsChannel />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = (context) => {
  return withAuth(context);
};

export default MainChannelPage;
