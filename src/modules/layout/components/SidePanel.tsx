import {SidebarPanelContainer} from "@/src/modules/layout";
import {Avatar} from "@/src/ui/avatar";
import doge from "@/src/assets/img/doge-meme-icon.jpg";

export const SidePanel = () => {
  return (
    <SidebarPanelContainer className="bg-gray-800">
      <div className="flex items-center my-4 ml-1.5">
        <Avatar src={doge} className="h-9 w-9 mr-2 mt-0" />
        <span className="text-xl text-white font-semibold">Sleek</span>
      </div>
    </SidebarPanelContainer>
  );
};
