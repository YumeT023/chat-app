import {MainGrid, SidePanel} from "@/src/modules/layout/components";

const ChannelPage = () => {
  return (
    <MainGrid sidePanel={<SidePanel />}>
      <div className="capitalize text-2xl">Layout</div>
    </MainGrid>
  );
};

export default ChannelPage;
