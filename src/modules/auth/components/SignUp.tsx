import {useRouter} from "next/navigation";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {signUpSchema} from "@/src/modules/auth/schemas";
import {AuthForm} from "@/src/modules/auth/components/AuthForm";
import {InputField} from "@/src/ui/form";
import {LOGIN, PROFILE} from "@/src/lib/utils/constants";
import {Button} from "@/src/ui/button";
import {createUser} from "@/src/lib/api";
import useSWRMutation from "swr/mutation";
import nookies from "nookies";

const signupMutation = async (
  key: string,
  {arg}: {arg: {name: string; email: string; password: string}}
) => createUser(arg);

export const SignUp = () => {
  const {push} = useRouter();
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const {isMutating: isLoading, trigger} = useSWRMutation("/users", signupMutation);

  const onSubmit = async (toCreate: any) => {
    try {
      const user = await trigger(toCreate);
      nookies.set(null, "user", JSON.stringify(user));
      push(PROFILE);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <AuthForm
      name="registrationForm"
      title="First, tell us who you are"
      submitBtn={
        <Button className="registerButton" loading={isLoading}>
          Register
        </Button>
      }
      handleSubmit={handleSubmit(onSubmit)}
      alt={{
        text: `Already have an account ?`,
        to: LOGIN,
        label: "Login",
      }}
    >
      <InputField
        placeholder="Name"
        root="my-2"
        className="w-full"
        error={`${errors.name?.message ?? ""}`}
        {...register("name")}
      />
      <InputField
        placeholder="Email"
        root="my-2"
        className="w-full"
        type="email"
        error={`${errors.email?.message ?? ""}`}
        {...register("email")}
      />
      <InputField
        placeholder="Password"
        root="my-2"
        type="password"
        className="w-full"
        error={`${errors.password?.message ?? ""}`}
        {...register("password")}
      />
      <InputField
        placeholder="Confirm Password"
        root="my-2"
        type="password"
        className="w-full"
        error={`${errors.confirmPassword?.message ?? ""}`}
        {...register("confirmPassword")}
      />
    </AuthForm>
  );
};
