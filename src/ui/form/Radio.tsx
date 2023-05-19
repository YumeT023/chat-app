import {ComponentPropsWithoutRef, forwardRef} from "react";

export type RadioProps = {
  name: string;
  root?: string;
  explicitName?: boolean;
  labelCls?: string;
  value: string;
} & ComponentPropsWithoutRef<"input">;

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({name, value, root = "", labelCls = "", explicitName, ...props}, ref) => {
    return (
      <div className={`mb-4 flex cursor-pointer items-center ${root}`}>
        <input
          id={`${name}-id`}
          ref={ref}
          value={value}
          name={name}
          type="radio"
          className="h-4 w-4 cursor-pointer border-accent-100 bg-gray-100 p-4 text-accent-100"
          {...props}
        />
        <label htmlFor={`${name}-id`} className="ml-2 text-sm font-medium text-gray-300">
          {value}
        </label>
      </div>
    );
  }
);
