import {SelectionBackdrop} from "@/src/ui/box";
import {FiChevronRight} from "react-icons/fi";
import Link from "next/link";
import {PropsWithChildren, useState} from "react";
import {Spinner} from "@/src/ui/loading";

export type CollapsibleMenuProps = PropsWithChildren<{
  header: {
    label: string;
    href?: string;
  };
  expandedByDefault?: boolean;
  loading?: boolean;
  className?: string;
}>;

export const CollapsibleMenu = ({
  loading,
  header,
  children,
  expandedByDefault,
  className: cls,
}: CollapsibleMenuProps) => {
  const [isCollapsed, setIsCollapsed] = useState(!expandedByDefault);

  return (
    <div className={cls}>
      <div className="flex items-center">
        <div className="flex w-10 justify-end px-2">
          <SelectionBackdrop onClick={() => setIsCollapsed(!isCollapsed)}>
            <FiChevronRight
              className={`h-6 w-5 rotate-90 font-bold transition duration-75 ${
                isCollapsed ? "rotate-0" : ""
              }`}
            />
          </SelectionBackdrop>
        </div>

        <SelectionBackdrop>
          {header?.href ? <Link href={header.href}>{header.label}</Link> : header.label}
        </SelectionBackdrop>

        {loading ? <Spinner className="text-gray-500" /> : null}
      </div>

      <div className={`pl-10 pr-3 transition duration-75 ${isCollapsed ? "hidden" : ""}`}>
        {children}
      </div>
    </div>
  );
};
