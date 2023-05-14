import {PropsWithChildren} from "react";

export const Container = ({children}: PropsWithChildren) => {
  return <div className="h-screen">{children}</div>;
};
