import {MainLayout, SidePanel} from "@/src/modules/layout";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import {EditChannel} from "@/src/modules/channel";
import {withAuth} from "@/src/lib/utils";
import {getChannelById} from "@/src/lib/api";

const EditChannelPage = ({
  channel,
  user,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <MainLayout title="Edit channel" sidePanel={<SidePanel user={user} />}>
      <EditChannel toEdit={channel} user={user} />
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

export default EditChannelPage;
