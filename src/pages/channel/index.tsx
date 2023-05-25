import {MainLayout} from "@/src/modules/layout/components";
import {GetServerSideProps} from "next";
import {withAuth} from "@/src/lib/utils";
import {getChannels} from "@/src/lib/api";
import {ChannelSidePanel, WhatIsChannel} from "@/src/modules/channel";
import type {Channel} from "@/src/modules/channel/types";

const MainChannelPage = ({channels}: {channels: Channel[]}) => {
  return (
    <MainLayout sidePanel={<ChannelSidePanel channels={channels} />} title="Channel">
      <WhatIsChannel />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = (context) => {
  return withAuth(context, async (user) => {
    const channels = await getChannels(user.token);
    return {
      props: {
        channels,
      },
    };
  });
};

export default MainChannelPage;
