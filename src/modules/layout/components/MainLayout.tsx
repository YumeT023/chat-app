import {PropsWithChildren, ReactNode} from "react";
import {Header, MainPanelContainer, SidebarPanelContainer} from "@/src/modules/layout";

export type MainGridProps = PropsWithChildren<{
  sidePanel?: ReactNode;
  rootClass?: string;
  title?: string | ReactNode;
}>;

export const MainLayout = ({
  children,
  rootClass,
  title = "",
  sidePanel = <SidebarPanelContainer />,
}: MainGridProps) => {
  return (
    <div className="h-full">
      <MainPanelContainer className={rootClass} title={title}>
        {children}
      </MainPanelContainer>
      <Header />
      {sidePanel}
    </div>
  );
};
