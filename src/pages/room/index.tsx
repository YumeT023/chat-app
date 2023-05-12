import {Authenticated} from "@/src/modules/auth/utils/Authenticated";
import {HeadController} from "../../common/utils";
import {MainLayout} from "@/src/common/components/layout/MainLayout";
import {ChannelList, MessagePanel} from "@/src/modules/room";
import {GetServerSideProps} from "next";

export type RoomPageProps = {
  channels: string[];
};

const RoomPage = ({channels}: RoomPageProps) => {
  return (
    <Authenticated>
      <HeadController title="chat • sleek">
        <MainLayout
          LeftPanel={() => <ChannelList channels={channels} />}
          MainPanel={() => <MessagePanel />}
        />
      </HeadController>
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
