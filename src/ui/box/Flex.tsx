import {DetailedHTMLProps, HTMLAttributes} from "react";

export type FlexProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  fullSize?: boolean;
  center?: boolean;
};

export const Flex = ({children, fullSize, center, className = "", ...props}: FlexProps) => {
  return (
    <div
      className={`flex ${center ? "items-center justify-center" : ""}  ${
        fullSize ? "h-full w-full" : ""
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
