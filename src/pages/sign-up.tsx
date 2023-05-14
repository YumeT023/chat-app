import {SignUp} from "@/src/modules/auth";
import {HeadController} from "@/src/ui/display";

const SignUpPage = () => {
  return (
    <HeadController title="sign up • chat">
      <SignUp />
    </HeadController>
  );
};

export default SignUpPage;
