import {User} from "@/src/modules/user/types";

export type LoggedUser = {
  user: User & {
    token: string;
  };
  status: boolean;
};

export type Payload = {
  email: string;
  password: string;
};

export type CreatePayload = Payload & {
  name: string;
  bio: string;
};
