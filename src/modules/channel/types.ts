import {User} from "@/src/modules/user/types";

export type Channel = {
  name: string;
  type: string;
  id: number;
  updatedAt: Date;
  createdAt: Date;
  owner: {
    id: number;
    name: string;
    email: string;
  };
};

export type CreateChannel = Pick<Channel, "name" | "type"> & {
  members: [];
};

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
