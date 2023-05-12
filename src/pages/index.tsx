import {Avatar, Stack, Typography} from "@mui/material";
import {useRouter} from "next/navigation";
import {useEffect} from "react";
import {HeadController} from "../common/utils";
import {RoundedBox} from "../common/components/box";
import dogeImage from "@/src/assets/img/doge-meme-icon.jpg";
import styles from "@/src/styles/index.module.css";
import Image from "next/image";

const HomePage = () => {
  const {push} = useRouter();

  useEffect(() => {
    push("/room");
  }, [push]);

  return (
    <HeadController title="home • sleek">
      <RoundedBox>
        <Stack className={styles.redirect_message_container}>
          <Avatar>
            <Image src={dogeImage} alt="doge meme icon" fill />
          </Avatar>

          <Typography variant="h4" fontWeight="bold" color="primary">{`Welcome back`}</Typography>
        </Stack>
      </RoundedBox>
    </HeadController>
  );
};

export default HomePage;
