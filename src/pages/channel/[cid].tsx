import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import {MainLayout, SidePanel} from "@/src/modules/layout";
import {ChannelMessage} from "@/src/modules/channel";
import {withAuth} from "@/src/lib/utils";
import {getChannelById} from "@/src/lib/api";

export const ChannelPage = ({channel}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <MainLayout title={channel.name} sidePanel={<SidePanel />}>
      <ChannelMessage />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return withAuth(context, async (user) => {
    const cid = context.query?.cid as string;
    const channel = await getChannelById(user.token, Number(cid));

    return {
      props: {
        channel,
      },
    };
  });
};

export default ChannelPage;
