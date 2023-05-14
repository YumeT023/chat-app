import {Authenticated} from "@/src/modules/auth/utils/Authenticated";
import {GetServerSideProps} from "next";
import {Layout} from "@/src/ui/layout";

export type RoomPageProps = {
  channels: string[];
};

const RoomPage = ({channels}: RoomPageProps) => {
  return (
    <Authenticated>
      <Layout>
        <h5>main</h5>
      </Layout>
    </Authenticated>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      channels: ["one", "two", "three"],
    },
  };
};

export default RoomPage;
