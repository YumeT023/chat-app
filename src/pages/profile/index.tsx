import {MainGrid, SidePanel} from "@/src/modules/layout";
import {Authenticated} from "@/src/modules/auth/utils/Authenticated";

const ViewProfilePage = () => {
  return (
    <Authenticated>
      <MainGrid
        sidePanel={<SidePanel />}
        rootClass="flex items-center justify-center h-full"
      ></MainGrid>
    </Authenticated>
  );
};

export default ViewProfilePage;
