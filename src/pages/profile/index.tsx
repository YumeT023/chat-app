import {MainGrid, SidePanel} from "@/src/modules/layout";
import {Authenticated} from "@/src/modules/auth/utils/Authenticated";
import {Profile} from "@/src/modules/user";

const ViewProfilePage = () => {
  return (
    <Authenticated>
      <MainGrid sidePanel={<SidePanel />} rootClass="flex items-center justify-center h-full">
        <Profile />
      </MainGrid>
    </Authenticated>
  );
};

export default ViewProfilePage;
