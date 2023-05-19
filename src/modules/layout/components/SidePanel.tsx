import {SidebarPanelContainer} from "@/src/modules/layout";
import {Avatar} from "@/src/ui/avatar";
import doge from "@/src/assets/img/doge-meme-icon.jpg";

export const SidePanel = () => {
  return (
    <SidebarPanelContainer className="bg-dark-100">
      <div className="ml-1.5 flex h-14 items-center border-y border-y-dark-300">
        <Avatar src={doge} className="mr-2 mt-0 h-9 w-9" />
        <span className="text-xl font-semibold text-white">Sleek</span>
      </div>
    </SidebarPanelContainer>
  );
};
