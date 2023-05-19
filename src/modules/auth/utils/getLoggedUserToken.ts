import {auth} from "@/src/store";

export const getLoggedUserToken = () => {
  return auth.getState().loggedUser?.user.token ?? "";
};
