import styles from "../common.module.css";
import {PropsWithChildren} from "react";

export type RoundedBoxProps = PropsWithChildren<{}>;

export const RoundedBox = ({children}: RoundedBoxProps) => {
  return (
    <main className={styles.box_rounded_container}>
      <div className={styles.box_rounded_root}>{children}</div>
    </main>
  );
};
