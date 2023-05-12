import {globalAxios as axios} from "@/src/conf/axios";
import {LoggedUser} from "@/src/modules/auth/types";

export const loginWithEmailAndPassword = async (email: string, password: string) => {
  try {
    return await axios.post<LoggedUser>("/users/login", {email, password});
  } catch (e: any) {
    throw e.response.data.message ?? e;
  }
};
