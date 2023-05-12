import {TextField} from "@mui/material";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {signUpSchema} from "@/src/modules/auth/utils/schemas";
import {AuthForm} from "@/src/modules/auth/components/AuthForm";
import {useAuthStore} from "@/src/modules/auth";
import {useRouter} from "next/navigation";

const common = {
  variant: "outlined" as "outlined",
  sx: {
    width: "80%",
  },
};

export const SignUp = () => {
  const createUser = useAuthStore((state) => state.createUser);
  const isLoading = useAuthStore((state) => state.isLoading);
  const {push} = useRouter();
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

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
      or={{
        caption: `Already have an account ?`,
        route: "/login",
        submitLabel: "Login",
      }}
    >
      <TextField
        size="medium"
        placeholder="Name"
        error={!!errors.name?.message}
        {...common}
        {...register("name")}
        helperText={<>{errors.name?.message}</>}
      />
      <TextField
        size="medium"
        placeholder="Email"
        error={!!errors.email?.message}
        {...common}
        {...register("email")}
        helperText={<>{errors.email?.message}</>}
      />
      <TextField
        size="medium"
        placeholder="Password"
        type="password"
        error={!!errors.password?.message}
        {...common}
        {...register("password")}
        helperText={<>{errors.password?.message}</>}
      />
      <TextField
        size="medium"
        placeholder="bio"
        error={!!errors.email?.message}
        {...common}
        {...register("bio")}
        helperText={<>{errors.bio?.message}</>}
      />
    </AuthForm>
  );
};
