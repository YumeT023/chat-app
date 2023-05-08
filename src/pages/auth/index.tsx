import {useRouter} from "next/navigation";
import {useEffect} from "react";
import {Backdrop, CircularProgress} from "@mui/material";

const AuthPage = () => {
  const {push} = useRouter();

  useEffect(() => {
    // TODO: redirect here
    push("/auth/sign-up");
  }, [push]);

  return (
    <Backdrop open>
      <CircularProgress />
    </Backdrop>
  );
};

export default AuthPage;
