import {User} from "@/src/modules/user/types";

export type Message = {
  id: number;
  content: string;
  recipientId: number;
  channelId: number;
  updatedAt: Date;
  createdAt: Date;
  senderId: number;
  sender: Pick<User, "id" | "name" | "email">;
};
