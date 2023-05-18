import {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import {Spinner} from "@/src/ui/loading";
import clsx from "clsx";

const sizeClasses = {
  md: "py-4 px-8",
  sm: "py-2 px-4",
};

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  loading?: boolean;
  size?: keyof typeof sizeClasses;
};

export const Button = ({
  disabled,
  loading,
  children,
  size = "md",
  className = "",
  ...props
}: ButtonProps) => {
  const box = `flex justify-between items-center gap-3 outline-none rounded-lg bg-primary-100 hover:bg-opacity-95 disabled:bg-opacity-80 ${sizeClasses[size]} ${className}`;
  const transition = `transition duration-200 ease-in-out`;
  const typo = `fon-bold text-sm text-white`;

  return (
    <button
      data-testid="button"
      disabled={disabled || loading}
      className={clsx(transition, box, typo)}
      {...props}
    >
      <Spinner className={`${clsx(!loading && "hidden")}`} />
      {children}
    </button>
  );
};
