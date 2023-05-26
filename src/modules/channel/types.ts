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
