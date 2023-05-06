import {PropsWithChildren} from "react";
import styles from "./layout.module.css";

export const Layout = ({children}: PropsWithChildren) => {
  return <main className={styles.main_layout}>{children}</main>;
};
