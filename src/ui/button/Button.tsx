import {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import {Spinner} from "@/src/ui/loading";

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  loading?: boolean;
};

export const Button = ({disabled, loading, children, ...props}: ButtonProps) => {
  const cn = `flex justify-between items-center gap-3 font-bold outline-none transition
    duration-200 ease-in-out text-sm py-4 px-8 bg-amber-900 rounded-lg text-white hover:bg-opacity-90 disabled:bg-opacity-70`;
  return (
    <button data-testid="button" disabled={disabled || loading} className={cn} {...props}>
      {loading && <Spinner />}
      {children}
    </button>
  );
};
