import {globalAxios as axios} from "@/src/conf/axios";
import {CreatePayload, LoggedUser, Payload} from "@/src/modules/auth/types";
import {withErrorFilter} from "@/src/utils/middleware";

export const loginWithEmailAndPassword = ({email, password}: Payload) =>
  withErrorFilter(() => {
    return axios.post<LoggedUser>("/users/login", {email, password});
  });

export const createUser = (user: CreatePayload) =>
  withErrorFilter(() => {
    return axios.post<LoggedUser>("/users", user);
  });
