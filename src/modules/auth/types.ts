import {User} from "@/src/modules/user/types";
import {Api} from "@/src/types/utility";

export type AuthenticatedUser = Api<
  User & {
    token: string;
  },
  "user"
>;

export type Payload = Pick<User, "email" | "password">;

export type CreatePayload = Payload & Pick<User, "name" | "bio">;
