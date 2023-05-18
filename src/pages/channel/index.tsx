import {MainLayout, SidePanel} from "@/src/modules/layout/components";

const ChannelPage = () => {
  return (
    <MainLayout sidePanel={<SidePanel />}>
      <div className="text-2xl capitalize">Channel main page</div>
    </MainLayout>
  );
};

export default ChannelPage;
