import {ComponentPropsWithoutRef, forwardRef} from "react";

export type InputFieldProps = {
  outerCls?: string;
  error?: string;
} & ComponentPropsWithoutRef<"input">;

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({className, outerCls, error = null, ...props}, ref) => {
    const cn = `w-full rounded-md border bg-white py-4 text-sm px-4 placeholder-gray-300 outline-none focus:border-primary focus-visible:shadow-none ${className}`;
    return (
      <div className={outerCls}>
        <input ref={ref} className={cn} data-testid="input-field" {...props} />
        {error !== null && <div className="text-primary-300 text-sm py-2 px-2">{error}</div>}
      </div>
    );
  }
);
