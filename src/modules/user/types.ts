import {Nullable} from "@/src/types/utility";

export enum UserStatus {
  Away,
  Connected,
  Busy,
}

export type User = {
  id: number;
  email: string;
  password: string;
  name: string;
  googleId: Nullable<string>;
  status: UserStatus;
  bio?: string;
  image?: string;
};

export type AuthenticatedUser = User & {
  token: string;
};
