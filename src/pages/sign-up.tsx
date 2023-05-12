import {SignUp} from "@/src/modules/auth";
import {HeadController} from "../common/utils";

const SignUpPage = () => {
  return (
    <HeadController title="sign up • chat">
      <SignUp />
    </HeadController>
  );
};

export default SignUpPage;
