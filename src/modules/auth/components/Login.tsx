import {useRouter} from "next/navigation";
import {useEffect} from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {loginSchema} from "@/src/modules/auth/schemas";
import {AuthForm} from "@/src/modules/auth/components/AuthForm";
import {InputField} from "@/src/ui/form";
import {getUserSession} from "@/src/modules/auth/utils/getUserSession";
import {PROFILE, SIGN_UP} from "@/src/lib/utils/constants";
import {Button} from "@/src/ui/button";
import {loginUser} from "@/src/lib/api";
import nookies from "nookies";
import useSWRMutation from "swr/mutation";

const loginMutation = async (key: string, {arg}: {arg: {email: string; password: string}}) =>
  loginUser(arg);

export const Login = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const {isMutating: isLoading, trigger} = useSWRMutation("/users/login", loginMutation);

  useEffect(() => {
    getUserSession() && router.push(PROFILE);
  }, []);

  const onSubmit = async (payload: any) => {
    try {
      const user = await trigger(payload);
      nookies.set(null, "user", JSON.stringify(user));
      router.push(PROFILE);
    } catch (e) {
      console.error("error> ", e);
    }
  };

  return (
    <AuthForm
      name="loginForm"
      title="Welcome back,"
      submitBtn={
        <Button className="loginButton" loading={isLoading}>
          Login
        </Button>
      }
      handleSubmit={handleSubmit(onSubmit)}
      alt={{
        text: `Don't have an account ?`,
        to: SIGN_UP,
        label: "create one",
      }}
    >
      <InputField
        disabled={isLoading}
        placeholder="Email"
        root="my-2"
        className="w-full"
        error={`${errors.email?.message ?? ""}`}
        {...register("email")}
      />
      <InputField
        disabled={isLoading}
        placeholder="Password"
        type="password"
        root="my-2"
        className="w-full"
        error={`${errors.password?.message ?? ""}`}
        {...register("password")}
      />
    </AuthForm>
  );
};
