import {CreatePayload, Payload} from "@/src/modules/auth/types";
import {globalAxios as axios} from "@/src/conf/axios";
import {formatError} from "@/src/modules/errors";
import {Api} from "@/src/types/utility";
import {AuthenticatedUser, User} from "@/src/modules/user/types";
import {addAuth} from "@/src/lib/api/utils";

export const loginUser = async ({email, password}: Payload) => {
  try {
    return await axios
      .post<Api<AuthenticatedUser, "user">>("/users/login", {email, password})
      .then(({data}) => data.user);
  } catch (err: unknown) {
    throw formatError(err);
  }
};

export const createUser = async (user: CreatePayload) => {
  try {
    return await axios
      .post<Api<AuthenticatedUser, "user">>("/users", user)
      .then(({data}) => data.user);
  } catch (err) {
    throw formatError(err);
  }
};

export const getUserById = async (token: string, uid: number) => {
  try {
    return await axios
      .get<Api<User, "user">>(`/users/${uid}`, addAuth(token))
      .then(({data}) => data.user);
  } catch (err) {
    throw formatError(err);
  }
};

export const getUsers = async (token: string) => {
  try {
    return await axios
      .get<Api<User[], "users">>("/users", addAuth(token))
      .then(({data}) => data.users);
  } catch (err) {
    throw formatError(err);
  }
};
