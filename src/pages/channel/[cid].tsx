import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import {MainLayout} from "@/src/modules/layout";
import {ChannelMessage, ChannelSidePanel} from "@/src/modules/channel";
import {withAuth} from "@/src/lib/utils";
import {getChannelById, getMessagesByChannel} from "@/src/lib/api";
import {FaEdit} from "react-icons/fa";
import {useEffect} from "react";
import Link from "next/link";
import useSWRMutation from "swr/mutation";

export const ChannelPage = ({
  user,
  cid,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const {
    isMutating: loadingChannel,
    trigger: fetchChannel,
    data: channel,
  } = useSWRMutation("/channels/id", () => getChannelById(user.token, cid));
  const {
    isMutating: loadingMessages,
    trigger: fetchMessages,
    data: messages = [],
  } = useSWRMutation("/channels/id/messages", () => getMessagesByChannel(user.token, cid));

  useEffect(() => {
    (async () => {
      await Promise.all([fetchChannel(), fetchMessages()]);
    })();
  }, [cid, user]);

  const Title = (
    <div className="flex gap-5">
      <div>{channel?.name}</div>
      <Link href={`/channel/edit/${channel?.id}`}>
        <FaEdit />
      </Link>
    </div>
  );

  return (
    <MainLayout title={Title} sidePanel={<ChannelSidePanel user={user} />}>
      {!loadingChannel && !loadingMessages && channel ? (
        <ChannelMessage messages={messages} user={user} channel={channel} />
      ) : null}
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return withAuth(context, async (user) => {
    const cid = context.query?.cid as string;

    return {
      props: {
        user,
        cid,
      },
    };
  });
};

export default ChannelPage;
