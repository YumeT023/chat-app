import {DetailedHTMLProps, HTMLAttributes} from "react";

export type FlexProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  fullSize?: boolean;
  center?: boolean;
};

export const Flex = ({children, className, fullSize, center, ...props}: FlexProps) => {
  return (
    <div
      className={`flex ${center ? "justify-center items-center" : ""}  ${
        fullSize ? "h-full w-full" : ""
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
