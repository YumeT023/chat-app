export type CreateChannel = {
  name: string;
  type: string;
  members: [];
};

export type Channel = {
  channel: Omit<CreateChannel, "members"> & {
    id: number;
    updatedAt: Date;
    createdAt: Date;
    owner: {
      id: number;
      name: string;
      email: string;
    };
  };
  status: boolean;
};

export type ChannelList = {
  channels: Array<Channel["channel"]>;
  status: boolean;
};
