import {ElementType} from "react";
import {Grid, useMediaQuery} from "@mui/material";
import styles from "./layout.module.css";

export type MainLayoutProps = {
  MainPanel: ElementType;
  LeftPanel?: ElementType;
  RightPanel?: ElementType;
};

// TODO: fix layouting
export const MainLayout = ({MainPanel, RightPanel, LeftPanel}: MainLayoutProps) => {
  const match = useMediaQuery("(max-width: 1080px)");

  const getMainPanelSize = () => {
    let initial = 7;
    !RightPanel && (initial += 3);
    !LeftPanel && (initial += 2);
    return initial;
  };

  return (
    <Grid container className={styles.main_layout} flexDirection="row">
      {LeftPanel && (
        <Grid item xs={match ? 3 : 2} sm={0} height="100vh">
          <LeftPanel />
        </Grid>
      )}

      <Grid item xs={getMainPanelSize()}>
        <MainPanel />
      </Grid>

      {RightPanel && match && (
        <Grid item xs={3}>
          <RightPanel />
        </Grid>
      )}
    </Grid>
  );
};
