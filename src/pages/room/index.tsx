import {Authenticated} from "@/src/modules/auth/utils/Authenticated";

const RoomPage = () => {
  return (
    <Authenticated>
      <h1>Hello world</h1>
    </Authenticated>
  );
};

export default RoomPage;
