import {ComponentPropsWithoutRef, forwardRef} from "react";

export type MultilineFieldProps = {
  name: string;
  error?: string;
  root?: string;
  explicitName?: boolean;
  labelCls?: string;
  // sizeVariant?: keyof typeof sizeClasses;
  // variant?: keyof typeof variantClasses;
} & ComponentPropsWithoutRef<"textarea">;

export const MultilineField = forwardRef<HTMLTextAreaElement, MultilineFieldProps>(
  (
    {
      // variant = "light",
      // sizeVariant = "lg",
      name,
      explicitName,
      className = "",
      root = "",
      labelCls = "",
      error = null,
      ...props
    },
    ref
  ) => {
    const cn = `rounded-md border text-sm outline-none focus-visible:shadow-none p-3 ${className}`;

    return (
      <div className={root}>
        {explicitName && <div className={`pb-2 capitalize ${labelCls}`}>{name}</div>}
        <textarea ref={ref} className={cn} data-testid="multiline-field" {...props} name={name} />
        {error !== null && <div className="px-2 py-2 text-sm text-red-600">{error}</div>}
      </div>
    );
  }
);
