import {PropsWithChildren, useEffect, useState} from "react";
import {useRouter} from "next/router";
import {auth} from "@/src/modules/auth";

export type AuthenticatedProps = PropsWithChildren<{
  /**
   * redirect to this route if the user is not authenticated
   */
  fallback?: string;
}>;

export const Authenticated = ({children, fallback = "/login"}: AuthenticatedProps) => {
  const logged = auth((state) => state.loggedUser);
  const {push} = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const doCheckAuthentication = async () => {
      logged ? setLoading(false) : await push(fallback);
    };

    doCheckAuthentication();
  }, [push, logged, fallback]);

  return <>{loading ? <span>loading</span> : children}</>;
};
