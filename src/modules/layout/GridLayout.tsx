import {useScreenMode} from "@/src/shared-hooks/useScreenMode";
import {PropsWithChildren} from "react";

export type LayoutRenderProps = PropsWithChildren;

export const GridLayout = ({children}: LayoutRenderProps) => {
  const mode = useScreenMode();
  let gridTemplateColumns = "15rem auto";

  if (mode === "compact") {
    gridTemplateColumns = "0 auto";
  }

  return (
    <div
      className="h-full"
      style={{
        display: "grid",
        gridTemplateColumns,
      }}
    >
      {children}
    </div>
  );
};
