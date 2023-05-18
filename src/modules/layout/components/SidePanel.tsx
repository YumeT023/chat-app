import {SidebarPanelContainer} from "@/src/modules/layout";
import {Avatar} from "@/src/ui/avatar";
import doge from "@/src/assets/img/doge-meme-icon.jpg";

export const SidePanel = () => {
  return (
    <SidebarPanelContainer className="bg-dark-100">
      <div className="flex items-center ml-1.5 border-y border-y-dark-300 h-14">
        <Avatar src={doge} className="h-9 w-9 mr-2 mt-0" />
        <span className="text-xl text-white font-semibold">Sleek</span>
      </div>
    </SidebarPanelContainer>
  );
};
