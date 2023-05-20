import {useEffect, useState} from "react";
import {MainLayout, SidePanel} from "@/src/modules/layout";
import {channel} from "@/src/store";
import {Channel} from "@/src/modules/channel/types";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import {FullPageLoading} from "@/src/ui/loading";
import {EditChannel} from "@/src/modules/channel";

const EditChannelPage = ({id}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [state, setState] = useState<Channel["channel"] | null>(null);
  const getChannelById = channel((x) => x.getById);
  const isLoading = channel((x) => x.isLoading);

  useEffect(() => {
    const fetch = async () => {
      const res = await getChannelById(id);
      setState(res.channel);
    };
    fetch();
  }, []);

  return (
    <MainLayout title="Edit channel" sidePanel={<SidePanel />}>
      {state && <EditChannel toEdit={state} />}
      <FullPageLoading isActive={isLoading} />
    </MainLayout>
  );
};

// TODO: serve complete data through SSR
// use cookies for storing auth in client as well as server
export const getServerSideProps: GetServerSideProps = async (context) => {
  // params cannot be undefined because we have /[cid] path
  const {cid} = context.query!;

  return {
    props: {
      id: cid,
    },
  };
};

export default EditChannelPage;
