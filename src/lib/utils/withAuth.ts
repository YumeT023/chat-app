import {GetServerSidePropsContext, GetServerSidePropsResult} from "next";
import {getUserSession} from "@/src/modules/auth/utils/getUserSession";
import {AuthenticatedUser} from "@/src/modules/user/types";
import {LOGIN} from "@/src/lib/utils/constants";

export const withAuth = async <T extends Record<string, unknown>>(
  context: GetServerSidePropsContext,
  authenticatedGetSSP?: (user: AuthenticatedUser) => Promise<GetServerSidePropsResult<T>>
) => {
  const user = getUserSession(context);

  if (!user) {
    return {
      redirect: {
        permanent: true,
        destination: LOGIN,
      },
    };
  }

  return authenticatedGetSSP
    ? authenticatedGetSSP(user)
    : {
        props: {
          user,
        },
      };
};
