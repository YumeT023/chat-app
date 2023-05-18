import {Spinner} from "@/src/ui/loading/Spinner";

export type FullPageLoadingProps = {
  isActive: boolean;
};

export const FullPageLoading = ({isActive}: FullPageLoadingProps) => {
  return isActive ? (
    <div className="fixed top-0 left-0 h-full w-full flex justify-center items-center bg-black bg-opacity-40">
      <Spinner />
    </div>
  ) : null;
};
