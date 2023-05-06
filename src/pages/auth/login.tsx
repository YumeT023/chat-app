import {Login} from "@/src/modules/auth";
import Head from "next/head";

const LoginPage = () => {
  return (
    <>
      <Head>
        <title>chat . Login</title>
      </Head>
      <Login />
    </>
  );
};

export default LoginPage;
