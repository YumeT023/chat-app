import {SidebarPanelContainer} from "@/src/modules/layout";
import {Avatar} from "@/src/ui/avatar";
import doge from "@/src/assets/img/doge-meme-icon.jpg";

export const SidePanel = () => {
  return (
    <SidebarPanelContainer className="bg-gray-800">
      <div className="flex items-center mb-5 ml-1.5">
        <Avatar src={doge} className="h-10 w-10 mt-2" />
        <span className="text-xl text-white font-semibold">Sleek</span>
      </div>
    </SidebarPanelContainer>
  );
};
