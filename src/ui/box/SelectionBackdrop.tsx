import {PropsWithChildren} from "react";
import {ButtonProps} from "@/src/ui/button";

export type SelectionBackdropProps = PropsWithChildren<{
  gutter?: string;
  className?: string;
}> &
  ButtonProps;

export const SelectionBackdrop = ({
  children,
  gutter = "1",
  className = "",
  ...props
}: SelectionBackdropProps) => {
  const gutterSize = `px-${gutter}`;
  return (
    <button
      className={`w-fit cursor-pointer rounded-md hover:bg-selection-900 ${gutterSize} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
