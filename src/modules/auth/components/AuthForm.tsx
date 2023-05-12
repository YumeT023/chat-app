import {BaseSyntheticEvent, PropsWithChildren} from "react";
import {RoundedBox} from "../../../common/components/box";
import {FullPageLoading} from "@/src/common/components";
import {Avatar, Box, Button, Typography} from "@mui/material";
import styles from "@/src/modules/auth/components/auth.module.css";
import Image from "next/image";
import dogeImage from "@/src/assets/img/doge-meme-icon.jpg";
import Link from "next/link";

export type AuthFormProps = PropsWithChildren<{
  title: string;
  submitLabel: string;
  isLoading?: boolean;
  or: {
    route: string;
    submitLabel: string;
    caption: string;
  };
  handleSubmit: (e?: BaseSyntheticEvent) => void;
}>;

const common = {
  variant: "outlined" as "outlined",
  sx: {
    width: "80%",
  },
};

export const AuthForm = ({
  title,
  submitLabel,
  or,
  handleSubmit,
  children,
  isLoading = false,
}: AuthFormProps) => {
  return (
    <RoundedBox>
      <form onSubmit={handleSubmit}>
        <FullPageLoading loading={isLoading}>
          <Box className={styles.login_container}>
            <Box className={styles.login_head}>
              <Avatar>
                <Image src={dogeImage} alt="doge meme icon" fill />
              </Avatar>

              <Typography variant="h4" fontWeight="bold" mt={2}>
                {title}
              </Typography>
            </Box>

            <Box className={styles.login_body}>{children}</Box>
            <Box className={styles.login_actions}>
              <Button size="large" {...common} variant="contained" disableRipple type="submit">
                {submitLabel}
              </Button>

              <Typography mt={3} variant="body2">
                {or.caption}
                <Link href={or.route} style={{textDecoration: "none", marginLeft: 1}}>
                  {or.submitLabel}
                </Link>
              </Typography>
            </Box>
          </Box>
        </FullPageLoading>
      </form>
    </RoundedBox>
  );
};
