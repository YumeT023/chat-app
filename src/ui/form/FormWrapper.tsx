import {PropsWithChildren} from "react";

export type FormWrapperProps = PropsWithChildren<{
  name: string;
  labelCls?: string;
  root?: string;
  error?: string;
}>;

export const FormWrapper = ({
  name,
  children,
  root = "",
  error = "",
  labelCls = "",
}: FormWrapperProps) => {
  return (
    <div className={root}>
      <div className={`pb-2 capitalize ${labelCls}`}>{name}</div>
      {children}
      {error !== null && <div className="px-2 py-2 text-sm text-red-600">{error}</div>}
    </div>
  );
};
