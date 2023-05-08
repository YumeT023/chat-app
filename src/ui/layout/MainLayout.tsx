import {ElementType} from "react";
import {Grid} from "@mui/material";
import styles from "./layout.module.css";

export type MainLayoutProps = {
  MainPanel: ElementType;
  LeftPanel?: ElementType;
  RightPanel?: ElementType;
};

export const MainLayout = ({MainPanel, RightPanel, LeftPanel}: MainLayoutProps) => {
  const getMainPanelSize = () => {
    let initial = 7;
    !RightPanel && (initial += 3);
    !LeftPanel && (initial += 2);
    return initial;
  };

  return (
    <Grid container className={styles.main_layout}>
      {LeftPanel && (
        <Grid item xs={2}>
          <LeftPanel />
        </Grid>
      )}

      <Grid item xs={getMainPanelSize()}>
        <MainPanel />
      </Grid>

      {RightPanel && (
        <Grid item xs={3}>
          <RightPanel />
        </Grid>
      )}
    </Grid>
  );
};
