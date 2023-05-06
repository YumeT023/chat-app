import {Login} from "@/src/modules/auth";
import Head from "next/head";
import {HeadController} from "@/src/ui/utils";

const LoginPage = () => {
  return (
    <HeadController title="chat . Login">
      <Login />
    </HeadController>
  );
};

export default LoginPage;
