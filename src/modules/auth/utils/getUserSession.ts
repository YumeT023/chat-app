import {parseCookies} from "nookies";
import {GetServerSidePropsContext} from "next";

export const getUserSession = (ctx?: GetServerSidePropsContext) => {
  const user = parseCookies(ctx).user ?? {};
  try {
    return JSON.parse(user);
  } catch {
    return null;
  }
};
