import {object, string, ref} from "yup";

export const loginSchema = object({
  email: string().email().required(),
  password: string().min(8),
});

export const signUpSchema = loginSchema.shape({
  name: string().required(),
  confirmPassword: string().equals([ref("password")], "Password should match"),
});
