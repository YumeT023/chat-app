import {Authenticated} from "@/src/modules/auth/utils/Authenticated";
import {HeadController} from "@/src/ui/utils";
import {MainLayout} from "@/src/ui/layout/MainLayout";

const RoomPage = () => {
  return (
    <Authenticated>
      <HeadController title="chat . rooms">
        <MainLayout
          LeftPanel={() => <p>left</p>}
          MainPanel={() => <p>main</p>}
          RightPanel={() => <p>right</p>}
        />
      </HeadController>
    </Authenticated>
  );
};

export default RoomPage;
