import {globalAxios as axios} from "@/src/conf/axios";
import {LoggedUser} from "@/src/modules/auth/types";
import {withErrorFilter} from "@/src/utils/middleware";

export const loginWithEmailAndPassword = (email: string, password: string) =>
  withErrorFilter(() => {
    return axios.post<LoggedUser>("/users/login", {email, password});
  });
