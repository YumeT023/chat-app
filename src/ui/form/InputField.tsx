import {ComponentPropsWithoutRef, forwardRef} from "react";

export type InputFieldProps = {
  error?: string;
  root?: string;
} & ComponentPropsWithoutRef<"input">;

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({className, root = "", error = null, ...props}, ref) => {
    const cn = `w-full rounded-md border py-4 text-sm px-4  placeholder-gray-300 outline-none focus:border-primary focus-visible:shadow-none ${className}`;
    return (
      <div className={root}>
        <input ref={ref} className={cn} data-testid="input-field" {...props} />
        {error !== null && <div className="px-2 py-2 text-sm text-red-600">{error}</div>}
      </div>
    );
  }
);
