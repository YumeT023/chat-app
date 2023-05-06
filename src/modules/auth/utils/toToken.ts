import {AuthPayload} from "@/src/modules/auth/types";

export const toToken = ({name, email, password}: AuthPayload) => {
  return `${name}@${email}:${password}`;
};
