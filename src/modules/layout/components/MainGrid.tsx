import {PropsWithChildren, ReactNode} from "react";
import {Header, MainPanelContainer, SidebarPanelContainer} from "@/src/modules/layout";

export type MainGridProps = PropsWithChildren<{
  sidePanel?: ReactNode;
  rootClass?: string;
}>;

export const MainGrid = ({
  children,
  rootClass,
  sidePanel = <SidebarPanelContainer />,
}: MainGridProps) => {
  return (
    <div className="h-full">
      <MainPanelContainer className={rootClass}>{children}</MainPanelContainer>
      <Header />
      {sidePanel}
    </div>
  );
};
