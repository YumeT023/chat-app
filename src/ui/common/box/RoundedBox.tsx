import styles from "../common.module.css";
import {PropsWithChildren} from "react";
import {Box, SxProps} from "@mui/material";

export type RoundedBoxProps = PropsWithChildren<{
  sx?: SxProps;
}>;

export const RoundedBox = ({children, sx = {}}: RoundedBoxProps) => {
  return (
    <Box className={styles.box_rounded_container} sx={sx}>
      <Box className={styles.box_rounded_root}>{children}</Box>
    </Box>
  );
};
