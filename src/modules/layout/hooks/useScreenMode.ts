import {useMediaQuery} from "react-responsive";

type ScreenMode = "compact" | "full";

export const useScreenMode = (): ScreenMode => {
  const col2 = useMediaQuery({minWidth: 720});
  if (!col2) {
    return "compact";
  }
  return "full";
};
