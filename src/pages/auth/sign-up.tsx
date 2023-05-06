import {SignUp} from "@/src/modules/auth";
import {HeadController} from "@/src/ui/utils";

const LoginPage = () => {
  return (
    <HeadController title="chat . Login">
      <SignUp />
    </HeadController>
  );
};

export default LoginPage;
