import {ComponentPropsWithoutRef, forwardRef} from "react";

export type InputFieldProps = {
  my?: number;
  error?: string;
} & ComponentPropsWithoutRef<"input">;

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({className, my = 0, error = null, ...props}, ref) => {
    const cn = `w-full rounded-md border bg-white py-4 text-sm px-4  placeholder-gray-300 outline-none focus:border-primary focus-visible:shadow-none ${className}`;
    const margin = `my-${my}`;
    return (
      <div className={margin}>
        <input ref={ref} className={cn} data-testid="input-field" {...props} />
        {error !== null && <div className="text-red-600 text-sm py-2 px-2">{error}</div>}
      </div>
    );
  }
);
