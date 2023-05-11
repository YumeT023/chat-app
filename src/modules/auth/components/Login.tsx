import {TextField} from "@mui/material";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {loginSchema} from "@/src/modules/auth/utils/schemas";
import {AuthForm} from "@/src/modules/auth/components/AuthForm";

const common = {
  variant: "outlined" as "outlined",
  sx: {
    width: "80%",
  },
};

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async ({name, email, password}: any) => {};

  return (
    <AuthForm
      title="Welcome back,"
      submitLabel="sign in"
      handleSubmit={handleSubmit(onSubmit)}
      or={{
        caption: `Don't have an account ?`,
        route: "/sign-up",
        submitLabel: "create one",
      }}
    >
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
    </AuthForm>
  );
};
