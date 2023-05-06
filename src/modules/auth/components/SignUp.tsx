import styles from "./auth.module.css";
import {RoundedBox} from "@/src/ui/common/box";
import dogeImage from "@/src/assets/img/doge-meme-icon.jpg";
import {Avatar, Box, Button, TextField, Typography} from "@mui/material";
import Image from "next/image";

const common = {
  variant: "outlined" as "outlined",
  sx: {
    width: "80%",
  },
};

export const SignUp = () => {
  return (
    <RoundedBox>
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
          <TextField size="medium" placeholder="Name" {...common} />
          <TextField size="medium" placeholder="Email" type="email" {...common} />
          <TextField size="medium" placeholder="Password" type="password" {...common} />
        </Box>
        <Box className={styles.login_actions}>
          <Button size="large" {...common} variant="contained" disableRipple>
            Sign up
          </Button>
        </Box>
      </Box>
    </RoundedBox>
  );
};
