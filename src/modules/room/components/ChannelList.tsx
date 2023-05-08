import {Avatar, List, ListItemButton, ListItemText, Toolbar, Typography} from "@mui/material";
import styles from "./channel.module.css";
import Image from "next/image";
import dogeImage from "@/src/assets/img/doge-meme-icon.jpg";

export type ChannelListProps = {
  // TODO: maybe a more specific datatype ?
  channels: string[];
};

export const ChannelList = ({channels = []}: ChannelListProps) => {
  return (
    <List className={styles.channel_container}>
      <Toolbar className={styles.channel_title} color="primary" sx={{gap: 2}}>
        <Avatar>
          <Image src={dogeImage} alt="doge meme icon" fill />
        </Avatar>
        <Typography variant="h6" m={0}>
          Channels
        </Typography>
      </Toolbar>
      {channels.map((channel, index) => (
        <ListItemButton sx={{borderRadius: "var(--border-radius)"}} key={channel + index}>
          <ListItemText>
            <strong>{"# "}</strong>
            {channel}
          </ListItemText>
        </ListItemButton>
      ))}
    </List>
  );
};
