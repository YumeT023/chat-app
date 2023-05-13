import {Avatar, Box, Stack, Toolbar, Typography} from "@mui/material";
import styles from "./channel.module.css";
import Image from "next/image";
import dogeImage from "@/src/assets/img/doge-meme-icon.jpg";
import {Logout} from "@/src/common/components/button";

export type ChannelListProps = {
  // TODO: maybe a more specific datatype ?
  channels: string[];
};

export const ChannelList = ({channels}: ChannelListProps) => {
  return (
    <Box className={styles.channel_container}>
      <Toolbar className={styles.channel_title} color="primary">
        <Avatar>
          <Image src={dogeImage} alt="doge meme icon" fill />
        </Avatar>
        <Typography variant="h6" m={0}>
          Channels
        </Typography>
      </Toolbar>
      <Box></Box>
      <Stack className={styles.toolbar_options} justifyContent="center" alignItems="flex-start">
        <Logout />
      </Stack>
    </Box>
  );
};
