import {AuthenticatedUser, CreatePayload, Payload} from "@/src/modules/auth/types";
import {globalAxios as axios} from "@/src/conf/axios";
import {formatError} from "@/src/modules/errors/utils";
import {Api} from "@/src/types/utility";
import {User} from "@/src/modules/user/types";
import {addAuth, reshapeData} from "@/src/lib/api/utils";

export const loginUser = async ({email, password}: Payload) => {
  try {
    return await axios
      .post<AuthenticatedUser>("/users/login", {email, password})
      .then((res) => reshapeData(res.data, "user"));
  } catch (err: unknown) {
    throw formatError(err);
  }
};

export const createUser = async (user: CreatePayload) => {
  try {
    return await axios
      .post<AuthenticatedUser>("/users", user)
      .then((res) => reshapeData(res.data, "user"));
  } catch (err) {
    throw formatError(err);
  }
};

export const getUsers = async (token: string) => {
  try {
    return await axios
      .get<Api<User[], "users">>("/users", addAuth(token))
      .then((res) => reshapeData(res.data, "users"));
  } catch (err) {
    throw formatError(err);
  }
};
