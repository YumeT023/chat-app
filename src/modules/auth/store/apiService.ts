import {globalAxios as axios} from "@/src/conf/axios";
import {LoggedUser} from "@/src/modules/auth/types";

export const loginUserWithEmailAndPassword = async (email: string, password: string) => {
  try {
    return await axios.post<LoggedUser>("/users/login", {email, password});
  } catch (e) {
    console.log("service> ", e);
  }
};
