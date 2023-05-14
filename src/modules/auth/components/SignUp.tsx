import {useRouter} from "next/navigation";
import {useEffect} from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {signUpSchema} from "@/src/modules/auth/utils/schemas";
import {AuthForm} from "@/src/modules/auth/components/AuthForm";
import {auth} from "@/src/modules/auth";
import {InputField} from "@/src/ui/form";

export const SignUp = () => {
  const loggedUser = auth((state) => state.loggedUser);
  const createUser = auth((state) => state.createUser);
  const isLoading = auth((state) => state.isLoading);
  const {push} = useRouter();
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  useEffect(() => {
    loggedUser && push("/room");
  }, []);

  const onSubmit = async (user: any) => {
    try {
      await createUser(user);
      push("/room");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <AuthForm
      title="First, tell us who you are"
      submitLabel="Create an account"
      handleSubmit={handleSubmit(onSubmit)}
      isLoading={isLoading}
      alt={{
        text: `Already have an account ?`,
        to: "/login",
        label: "Login",
      }}
    >
      <InputField
        placeholder="Name"
        my={2}
        error={`${errors.name?.message ?? ""}`}
        {...register("name")}
      />
      <InputField
        placeholder="Email"
        my={2}
        error={`${errors.email?.message ?? ""}`}
        {...register("email")}
      />
      <InputField
        placeholder="Password"
        type="password"
        my={2}
        error={`${errors.password?.message ?? ""}`}
        {...register("password")}
      />
      <InputField
        placeholder="Bio"
        my={2}
        error={`${errors.bio?.message ?? ""}`}
        {...register("bio")}
      />
    </AuthForm>
  );
};
