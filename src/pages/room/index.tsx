import {Authenticated} from "@/src/modules/auth/utils/Authenticated";
import {HeadController} from "@/src/ui/utils";

const RoomPage = () => {
  return (
    <Authenticated>
      <HeadController title="chat . rooms">
        <h1>Hello world</h1>
      </HeadController>
    </Authenticated>
  );
};

export default RoomPage;
