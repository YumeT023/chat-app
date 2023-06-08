import {PropsWithChildren} from "react";
import {ButtonProps} from "@/src/ui/button";

export type SelectionBackdropProps = PropsWithChildren<{
  gutter?: string;
  className?: string;
  selected?: boolean;
}> &
  ButtonProps;

export const SelectionBackdrop = ({
  children,
  gutter = "1",
  className = "",
  selected,
  ...props
}: SelectionBackdropProps) => {
  const gutterSize = `px-${gutter}`;
  return (
    <button
      className={`w-fit cursor-pointer rounded-md ${
        !selected ? "hover:bg-selection-900" : "bg-accent-100 bg-opacity-60"
      } ${gutterSize} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
