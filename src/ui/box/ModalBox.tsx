import {PropsWithChildren, ReactNode, useState} from "react";
import {MdClose} from "react-icons/md";
import {SelectionBackdrop} from "@/src/ui/box/SelectionBackdrop";

export type ModalBoxProps = PropsWithChildren<{
  open: boolean;
  title: string;
  action?: ReactNode;
  close: () => void;
  className?: string;
}>;

export const ModalBox = ({open, children, close, title, action, className = ""}: ModalBoxProps) => {
  return (
    <>
      <div
        className={`fixed left-0 top-0 z-10 h-full w-full bg-selection-900 bg-opacity-80 ${
          !open ? "hidden" : ""
        }`}
        onClick={close}
      ></div>

      <div
        className={`fixed left-1/2 top-1/2 z-30 w-[35rem] min-w-fit -translate-x-1/2 -translate-y-1/2 rounded-md border border-dark-300 bg-dark-100 shadow-xl shadow-dark-100 ${
          !open ? "hidden" : ""
        } ${className}`}
      >
        <div className={`flex h-14 items-center justify-between border-b border-dark-300 px-2`}>
          <span className="text-md flex-1 text-primary-200">{title}</span>

          <div className="flex items-center justify-between gap-5">
            {action}

            <SelectionBackdrop onClick={close} className="h-7">
              <MdClose className="h-6 w-5 text-gray-600" />
            </SelectionBackdrop>
          </div>
        </div>

        <div className="mt-2 max-h-[30rem] overflow-y-auto p-3">{children}</div>
      </div>
    </>
  );
};
