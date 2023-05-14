import {PropsWithChildren, ReactNode} from "react";
import {GridLayout} from "@/src/modules/layout/GridLayout";

export type MainLayoutProps = PropsWithChildren<{
  leftPanel?: ReactNode;
}>;

export const Layout = ({leftPanel, children}: MainLayoutProps) => {
  return (
    <GridLayout>
      {leftPanel && leftPanel}
      {children}
    </GridLayout>
  );
};
