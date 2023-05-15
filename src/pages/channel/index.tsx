import {MainGrid, SidePanel} from "@/src/modules/layout/components";

const ChannelPage = () => {
  return (
    <MainGrid sidePanel={<SidePanel />}>
      <div className="capitalize text-2xl">Channel main page</div>
    </MainGrid>
  );
};

export default ChannelPage;
