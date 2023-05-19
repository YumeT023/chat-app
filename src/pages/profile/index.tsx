import {MainLayout, SidePanel} from "@/src/modules/layout";
import {Authenticated} from "@/src/modules/auth/utils/Authenticated";
import {Profile} from "@/src/modules/user";

const ViewProfilePage = () => {
  return (
    <Authenticated>
      <MainLayout
        sidePanel={<SidePanel />}
        rootClass="flex items-center justify-center h-full"
        title={"Profile"}
      >
        <Profile />
      </MainLayout>
    </Authenticated>
  );
};

export default ViewProfilePage;
