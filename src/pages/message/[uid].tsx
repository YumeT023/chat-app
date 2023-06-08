import useSWR from "swr";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import {withAuth} from "@/src/lib/utils";
import {getMessagesByUser, getUserById} from "@/src/lib/api";
import {MainLayout, SidePanel} from "@/src/modules/layout";
import {MessageUser} from "@/src/modules/message";

const MessageUserPage = ({
  recipient,
  user,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const {isLoading, data: messages = []} = useSWR("/channels/id/messages", () =>
    getMessagesByUser(user.token, recipient.id)
  );

  return (
    <MainLayout title={recipient.name} sidePanel={<SidePanel user={user} />}>
      {!isLoading && recipient ? (
        <MessageUser messages={messages} user={user} recipient={recipient} />
      ) : null}
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = (context) => {
  return withAuth(context, async (user) => {
    const uid = context.query?.uid as string;

    if (uid == String(user.id)) {
      throw new Error(`user @${user.name} cant message himself`);
    }

    const recipient = await getUserById(user.token, Number(uid));

    return {
      props: {
        user,
        recipient,
      },
    };
  });
};

export default MessageUserPage;
