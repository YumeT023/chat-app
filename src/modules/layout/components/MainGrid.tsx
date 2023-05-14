import {PropsWithChildren, ReactNode} from "react";
import {MainPanelContainer, SidebarPanelContainer} from "@/src/modules/layout";

export type MainGridProps = PropsWithChildren<{
  sidePanel?: ReactNode;
}>;

export const MainGrid = ({children, sidePanel = <SidebarPanelContainer />}: MainGridProps) => {
  return (
    <div className="h-full">
      <MainPanelContainer>{children}</MainPanelContainer>
      {sidePanel}
    </div>
  );
};
