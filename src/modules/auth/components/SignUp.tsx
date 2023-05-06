import {Avatar, Box, Button, TextField, Typography} from "@mui/material";
import {useForm} from "react-hook-form";
import {object, string} from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {RoundedBox} from "@/src/ui/common/box";
import Image from "next/image";
import styles from "./auth.module.css";
import dogeImage from "@/src/assets/img/doge-meme-icon.jpg";
import {useAuth} from "@/src/modules/auth";
import {useRouter} from "next/navigation";
import {useState} from "react";
import {FullPageLoading} from "@/src/ui/common";

const common = {
  variant: "outlined" as "outlined",
  sx: {
    width: "80%",
  },
};

const schema = object({
  name: string().min(8).required(),
  email: string().email().required(),
  password: string().min(8),
}).required();

export const SignUp = () => {
  const {authenticate} = useAuth();
  const {push} = useRouter();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async ({name, email, password}: any) => {
    setLoading(true);
    authenticate({
      name,
      email,
      password,
    });
    push("/room");
  };

  return (
    <RoundedBox>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FullPageLoading loading={loading}>
          <Box className={styles.login_container}>
            <Box className={styles.login_head}>
              <Avatar>
                <Image src={dogeImage} alt="doge meme icon" fill />
              </Avatar>
              <Typography
                variant="h4"
                fontWeight="bold"
                mt={2}
              >{`First, tell us who you are`}</Typography>
            </Box>
            <Box className={styles.login_body}>
              <TextField
                size="medium"
                placeholder="Name"
                error={!!errors.name?.message}
                {...common}
                {...register("name", {required: true})}
                helperText={<>{errors.name?.message}</>}
              />
              <TextField
                size="medium"
                placeholder="Email"
                error={!!errors.email?.message}
                {...common}
                {...register("email", {required: true})}
                helperText={<>{errors.email?.message}</>}
              />
              <TextField
                size="medium"
                placeholder="Password"
                error={!!errors.password?.message}
                {...common}
                {...register("password", {required: true})}
                helperText={<>{errors.password?.message}</>}
              />
            </Box>
            <Box className={styles.login_actions}>
              <Button size="large" {...common} variant="contained" disableRipple type="submit">
                Sign up
              </Button>
            </Box>
          </Box>
        </FullPageLoading>
      </form>
    </RoundedBox>
  );
};
