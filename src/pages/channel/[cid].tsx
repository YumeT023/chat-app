import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import {MainLayout, SidePanel} from "@/src/modules/layout";
import {ChannelMessage} from "@/src/modules/channel";
import {Authenticated} from "@/src/modules/auth/utils/Authenticated";

export const ChannelPage = ({
  channelId,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <MainLayout title="" sidePanel={<SidePanel />}>
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
