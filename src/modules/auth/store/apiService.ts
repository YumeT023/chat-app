import {globalAxios as axios} from "@/src/conf/axios";
import {CreatePayload, LoggedUser, Payload} from "@/src/modules/auth/types";
import {formatError} from "@/src/modules/errors/utils/formatError";

export const loginWithEmailAndPassword = async ({email, password}: Payload) => {
  try {
    return await axios.post<LoggedUser>("/users/login", {email, password});
  } catch (err: unknown) {
    throw formatError(err);
  }
};

export const createUser = async (user: CreatePayload) => {
  try {
    return await axios.post<LoggedUser>("/users", user);
  } catch (err) {
    throw formatError(err);
  }
};
