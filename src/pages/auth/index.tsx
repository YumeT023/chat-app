import {useRouter} from "next/navigation";
import {useEffect} from "react";

const AuthPage = () => {
  const {push} = useRouter();

  useEffect(() => {
    // TODO: redirect here
    push("/auth/login");
  }, [push]);
};

export default AuthPage;
