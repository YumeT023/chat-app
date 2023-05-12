import {Nullable} from "@/src/types/utility";

export enum UserStatus {
  Away,
  Connected,
  Busy,
}

export type User = {
  id: number;
  email: string;
  name: string;
  googleId: Nullable<string>;
  bio: string;
  status: UserStatus;
};
