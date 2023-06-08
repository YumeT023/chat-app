import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import {MainLayout, SidePanel} from "@/src/modules/layout";
import {ChannelMessage} from "@/src/modules/channel";
import {withAuth} from "@/src/lib/utils";
import {getChannelById, getMessagesByChannel} from "@/src/lib/api";
import {FaEdit} from "react-icons/fa";
import Link from "next/link";
import {useEffect} from "react";
import useSWRMutation from "swr/mutation";

export const ChannelPage = ({
  user,
  channel,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const {
    isMutating,
    trigger,
    data: messages = [],
  } = useSWRMutation("/channels/id/messages", () => getMessagesByChannel(user.token, channel.id));

  // TODO: refactor
  useEffect(() => {
    trigger();
  }, [channel]);

  const Title = (
    <div className="flex gap-5">
      <div>{channel?.name}</div>
      <Link href={`/channel/edit/${channel?.id}`}>
        <FaEdit />
      </Link>
    </div>
  );

  return (
    <MainLayout title={Title} sidePanel={<SidePanel user={user} />}>
      {!isMutating && channel ? (
        <ChannelMessage messages={messages} user={user} channel={channel} />
      ) : null}
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return withAuth(context, async (user) => {
    const cid = context.query?.cid as string;

    const channel = await getChannelById(user.token, Number(cid));

    return {
      props: {
        user,
        channel,
      },
    };
  });
};

export default ChannelPage;
