import {PropsWithChildren} from "react";
import {FaHashtag} from "react-icons/fa";

export type ContainerProps = PropsWithChildren<{
  className?: string;
}>;
export type MainPanelContainerProps = ContainerProps & {
  title: string;
};

export const MainContainer = ({children, className}: ContainerProps) => {
  return <div className={`h-screen ${className}`}>{children}</div>;
};

export const SidebarPanelContainer = ({children, className = ""}: ContainerProps) => {
  const cn = `fixed top-12 left-0 transition-transform -translate-x-full sm:translate-x-0 w-64 h-full ${className}`;
  return <div className={cn}>{children}</div>;
};

export const MainPanelContainer = ({children, title, className = ""}: MainPanelContainerProps) => {
  const cn = `sm:ml-64 h-full pt-12 ${className}`;
  const maxH = `calc(100% - 3.5rem)`;

  return (
    <div className={cn}>
      <div className="h-full w-full bg-dark-250 border-l border-l-dark-300">
        <div className="h-14 border-y border-dark-300 flex items-center">
          <div className="ml-4 text-xl font-semibold text-primary-200 flex items-center gap-2">
            <FaHashtag /> <span>{title}</span>
          </div>
        </div>
        <div className="overflow-y-auto" style={{maxHeight: maxH}}>
          {children}
        </div>
      </div>
    </div>
  );
};
