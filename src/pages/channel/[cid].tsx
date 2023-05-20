import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import {MainLayout, SidePanel} from "@/src/modules/layout";
import {ChannelMessage} from "@/src/modules/channel";

export const ChannelPage = ({
  channelId,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <MainLayout title={channelId} sidePanel={<SidePanel />}>
      <ChannelMessage />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      channelId: context.query.cid,
    },
  };
};

export default ChannelPage;
