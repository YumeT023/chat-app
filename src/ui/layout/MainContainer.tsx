import {PropsWithChildren} from "react";

export const MainContainer = ({children}: PropsWithChildren) => {
  return <div className="h-screen">{children}</div>;
};
