import {Login} from "@/src/modules/auth";
import {HeadController} from "@/src/ui/utils";

const LoginPage = () => {
  return (
    <HeadController title="login • chat">
      <Login />
    </HeadController>
  );
};

export default LoginPage;
