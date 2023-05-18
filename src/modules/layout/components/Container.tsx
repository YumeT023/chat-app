import {PropsWithChildren} from "react";

type ContainerProps = PropsWithChildren<{
  className?: string;
}>;

export const MainContainer = ({children, className}: ContainerProps) => {
  return <div className={`h-screen ${className}`}>{children}</div>;
};

export const SidebarPanelContainer = ({children, className = ""}: ContainerProps) => {
  const cn = `fixed top-12 left-0 transition-transform -translate-x-full sm:translate-x-0 w-64 h-full ${className}`;
  return <div className={cn}>{children}</div>;
};

export type MainPanelContainerProps = ContainerProps & {
  title?: string;
};

export const MainPanelContainer = ({
  children,
  title = "",
  className = "",
}: MainPanelContainerProps) => {
  const cn = `sm:ml-64 h-full pt-12 ${className}`;
  return (
    <div className={cn}>
      <div className="h-full w-full bg-accent-200">{children}</div>
    </div>
  );
};
