import {Backdrop, CircularProgress} from "@mui/material";
import {PropsWithChildren} from "react";

export type FullPageLoadingProps = PropsWithChildren<{
  loading?: boolean;
}>;

export const FullPageLoading = ({children, loading = true}: FullPageLoadingProps) => {
  return (
    <>
      <Backdrop open={loading}>
        <CircularProgress />
      </Backdrop>
      {children}
    </>
  );
};
