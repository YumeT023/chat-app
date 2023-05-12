import {User} from "@/src/modules/user/types";

// TODO: to be removed
export type AuthPayload = {
  name: string;
  password: string;
  email: string;
};

export type LoggedUser = User & {
  token: string;
};

export type Payload = {
  email: string;
  password: string;
};
