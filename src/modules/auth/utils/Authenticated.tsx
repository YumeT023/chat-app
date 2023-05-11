import {PropsWithChildren, useEffect, useRef, useState} from "react";
import {useAuth} from "@/src/modules/auth";
import {useRouter} from "next/router";
import {HeadController} from "@/src/ui/utils";
import {FullPageLoading} from "@/src/ui/common";

export type AuthenticatedProps = PropsWithChildren<{
  /**
   * redirect to this route if the user is not authenticated
   */
  fallback?: string;
}>;

export const Authenticated = ({children, fallback = "/login"}: AuthenticatedProps) => {
  const {checkAuth} = useAuth();
  const {push} = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const doCheckAuthentication = async () => {
      checkAuth() ? setLoading(false) : await push(fallback);
    };

    doCheckAuthentication();
  }, [push, checkAuth, fallback]);

  return <>{loading ? <FullPageLoading /> : children}</>;
};
