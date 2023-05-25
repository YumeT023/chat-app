import {MainLayout, SidePanel} from "@/src/modules/layout";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import {EditChannel} from "@/src/modules/channel";
import {withAuth} from "@/src/lib/utils";
import {getChannelById} from "@/src/lib/api";

const EditChannelPage = ({channel}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <MainLayout title="Edit channel" sidePanel={<SidePanel />}>
      <EditChannel toEdit={channel} />
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

export default EditChannelPage;
