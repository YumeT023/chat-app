import {PropsWithChildren} from "react";

type ContainerProps = PropsWithChildren<{
  className?: string;
}>;

export const MainContainer = ({children}: ContainerProps) => {
  return <div className="h-screen">{children}</div>;
};

export const SidebarPanelContainer = ({children, className = ""}: ContainerProps) => {
  const cn = `fixed top-0 left-0 transition-transform -translate-x-full sm:translate-x-0 w-64 h-full ${className}`;
  return <div className={cn}>{children}</div>;
};

export const MainPanelContainer = ({children, className = ""}: ContainerProps) => {
  const cn = `sm:ml-64 ${className}`;
  return <div className={cn}>{children}</div>;
};
