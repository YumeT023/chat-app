import {PropsWithChildren} from "react";

export type MainGridProps = PropsWithChildren<{}>;

export const MainGrid = ({children}: MainGridProps) => {
  let gridTemplateColumns = "15% auto 20%";
  return (
    <div
      className="h-full"
      style={{
        display: "grid",
        gridTemplateColumns,
        columnGap: 20,
      }}
    >
      {children}
    </div>
  );
};
