import {PropsWithChildren, ReactNode} from "react";
import {MainGrid} from "@/src/ui/layout/MainGrid";

export type LayoutProps = PropsWithChildren<{
  leftPanel?: ReactNode;
  rightPanel?: ReactNode;
}>;

export const Layout = ({leftPanel, rightPanel, children}: LayoutProps) => {
  return (
    <MainGrid>
      <div className="bg-blue-100 h-full">left</div>
      {children}
      <div className="bg-blue-500">right</div>
    </MainGrid>
  );
};
