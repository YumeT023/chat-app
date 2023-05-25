import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import {MainLayout, SidePanel} from "@/src/modules/layout";
import {ChannelMessage} from "@/src/modules/channel";
import {withAuth} from "@/src/lib/utils";
import {getChannelById} from "@/src/lib/api";
import {FaEdit} from "react-icons/fa";
import Link from "next/link";

export const ChannelPage = ({channel}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const Title = (
    <div className="flex gap-5">
      <div>{channel.name}</div>
      <Link href={`/channel/edit/${channel.id}`}>
        <FaEdit />
      </Link>
    </div>
  );

  return (
    <MainLayout title={Title} sidePanel={<SidePanel />}>
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
