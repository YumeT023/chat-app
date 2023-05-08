import {useRouter} from "next/navigation";
import {useEffect} from "react";
import {FullPageLoading} from "@/src/ui/common";

const AuthPage = () => {
  const {push} = useRouter();

  useEffect(() => {
    // TODO: redirect here
    push("/auth/sign-up");
  }, [push]);

  return <FullPageLoading />;
};

export default AuthPage;
