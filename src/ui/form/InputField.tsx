import {ComponentPropsWithoutRef, forwardRef} from "react";

const sizeClasses = {
  lg: "p-4",
  md: "p-2.5",
};

const variantClasses = {
  dark: "border-gray-600 bg-dark-100 text-gray-400 placeholder-gray-600",
  light: "placeholder-gray-300 focus:border-primary",
};

export type InputFieldProps = {
  name: string;
  error?: string;
  root?: string;
  explicitName?: boolean;
  labelCls?: string;
  sizeVariant?: keyof typeof sizeClasses;
  variant?: keyof typeof variantClasses;
} & ComponentPropsWithoutRef<"input">;

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      className,
      name,
      explicitName,
      sizeVariant = "lg",
      root = "",
      labelCls = "",
      error = null,
      variant = "light",
      ...props
    },
    ref
  ) => {
    const size = sizeClasses[sizeVariant];
    const mode = variantClasses[variant];
    const cn = `w-full rounded-md border text-sm outline-none focus-visible:shadow-none ${size} ${mode} ${className}`;

    return (
      <div className={root}>
        {explicitName && <div className={`pb-2 capitalize ${labelCls}`}>{name}</div>}
        <input ref={ref} className={cn} data-testid="input-field" {...props} name={name} />
        {error !== null && <div className="px-2 py-2 text-sm text-red-600">{error}</div>}
      </div>
    );
  }
);
