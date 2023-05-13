import {IconButton} from "@mui/material";
import {LogoutRounded} from "@mui/icons-material";
import {useAuthStore} from "@/src/modules/auth";
import {useRouter} from "next/navigation";

export const Logout = () => {
  const {push} = useRouter();
  const doLogout = useAuthStore((state) => state.logoutUser);

  const logout = () => {
    doLogout();
    push("/login");
  };

  return (
    <IconButton size="medium" sx={{color: "white"}} onClick={logout}>
      <LogoutRounded />
    </IconButton>
  );
};
