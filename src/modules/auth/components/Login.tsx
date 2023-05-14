import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {loginSchema} from "@/src/modules/auth/utils/schemas";
import {AuthForm} from "@/src/modules/auth/components/AuthForm";
import {useAuthStore} from "@/src/modules/auth";
import {useRouter} from "next/navigation";
import {InputField} from "@/src/ui/form";
import {useEffect} from "react";

export const Login = () => {
  const loggedUser = useAuthStore((state) => state.loggedUser);
  const login = useAuthStore((state) => state.loginUser);
  const isLoading = useAuthStore((state) => state.isLoading);
  const {push} = useRouter();
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  useEffect(() => {
    loggedUser && push("/room");
  }, []);

  const onSubmit = async (payload: any) => {
    try {
      await login(payload);
      push("/room");
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
        my={2}
        error={`${errors.email?.message ?? ""}`}
        {...register("email")}
      />
      <InputField
        disabled={isLoading}
        placeholder="Password"
        my={2}
        error={`${errors.password?.message ?? ""}`}
        {...register("password")}
      />
    </AuthForm>
  );
};
