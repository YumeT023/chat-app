import {Login} from "@/src/modules/auth";
import {HeadController} from "../common/utils";

const LoginPage = () => {
  return (
    <HeadController title="login • chat">
      <Login />
    </HeadController>
  );
};

export default LoginPage;
