import {Authenticated} from "@/src/modules/auth/utils/Authenticated";
import {GetServerSideProps} from "next";

export type RoomPageProps = {
  channels: string[];
};

const RoomPage = ({channels}: RoomPageProps) => {
  return <Authenticated></Authenticated>;
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      channels: ["one", "two", "three"],
    },
  };
};

export default RoomPage;
