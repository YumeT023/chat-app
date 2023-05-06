import {useRouter} from "next/navigation";
import {useEffect} from "react";

const AuthPage = () => {
  const {push} = useRouter();

  useEffect(() => {
    // TODO: redirect here
    push("/auth/sign-in");
  }, [push]);
};

export default AuthPage;
