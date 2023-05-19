export type CreateChannel = {
  name: string;
  type: string;
  members: [];
};

export type Channel = {
  channel: Omit<CreateChannel, "members"> & {
    id: number;
    ownerId: number;
    updatedAt: Date;
    createdAt: Date;
  };
  status: boolean;
};
