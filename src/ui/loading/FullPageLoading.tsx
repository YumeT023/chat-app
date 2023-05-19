import {Spinner} from "@/src/ui/loading/Spinner";

export type FullPageLoadingProps = {
  isActive: boolean;
};

export const FullPageLoading = ({isActive}: FullPageLoadingProps) => {
  return isActive ? (
    <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-40">
      <Spinner />
    </div>
  ) : null;
};
