import {useRouter} from "next/navigation";
import {useEffect} from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {loginSchema} from "@/src/modules/auth/utils/schemas";
import {AuthForm} from "@/src/modules/auth/components/AuthForm";
import {InputField} from "@/src/ui/form";
import {auth} from "@/src/modules/auth";

export const Login = () => {
  const loggedUser = auth((state) => state.loggedUser);
  const login = auth((state) => state.loginUser);
  const isLoading = auth((state) => state.isLoading);
  const {push} = useRouter();
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  useEffect(() => {
    loggedUser && push("/profile");
  }, []);

  const onSubmit = async (payload: any) => {
    try {
      await login(payload);
      push("/profile");
    } catch (e) {
      console.error("error> ", e);
    }
  };

  return (
    <AuthForm
      title="Welcome back,"
      submitLabel="sign in"
      handleSubmit={handleSubmit(onSubmit)}
      isLoading={isLoading}
      alt={{
        text: `Don't have an account ?`,
        to: "/sign-up",
        label: "create one",
      }}
    >
      <InputField
        disabled={isLoading}
        placeholder="Email"
        outerCls="my-2"
        error={`${errors.email?.message ?? ""}`}
        {...register("email")}
      />
      <InputField
        disabled={isLoading}
        placeholder="Password"
        type="password"
        outerCls="my-2"
        error={`${errors.password?.message ?? ""}`}
        {...register("password")}
      />
    </AuthForm>
  );
};
