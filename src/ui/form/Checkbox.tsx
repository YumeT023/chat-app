import {ComponentPropsWithoutRef, forwardRef} from "react";

export type CheckboxProps = {
  name: string;
  root?: string;
  label?: string;
  explicitName?: boolean;
  labelCls?: string;
  value: string;
} & ComponentPropsWithoutRef<"input">;

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({name, value, root = "", labelCls = "", label, explicitName, ...props}, ref) => {
    return (
      <div className={`mb-4 flex cursor-pointer items-center ${root}`}>
        <input
          id={`${name}-id`}
          ref={ref}
          value={value}
          name={name}
          type="checkbox"
          className="h-4 w-4 cursor-pointer border-accent-100 bg-gray-100 p-4 text-accent-100"
          {...props}
        />
        <label htmlFor={`${name}-id`} className="ml-2 text-sm font-medium text-gray-300">
          {label || name}
        </label>
      </div>
    );
  }
);
