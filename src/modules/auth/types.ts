import {User} from "@/src/modules/user/types";

export type LoggedUser = User & {
  token: string;
};

export type Payload = {
  email: string;
  password: string;
};

export type CreatePayload = Payload & {
  name: string;
  bio: string;
};
