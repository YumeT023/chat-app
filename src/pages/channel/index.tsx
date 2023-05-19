import {MainGrid, SidePanel} from "@/src/modules/layout/components";

const ChannelPage = () => {
  return (
    <MainGrid sidePanel={<SidePanel />}>
      <div className="text-2xl capitalize">Channel main page</div>
    </MainGrid>
  );
};

export default ChannelPage;
