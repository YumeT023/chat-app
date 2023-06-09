import Link from "next/link";
import {Avatar} from "@/src/ui/avatar";
import {InputField} from "@/src/ui/form";
import {getUserSession} from "@/src/modules/auth/utils/getUserSession";
import {useRouter} from "next/navigation";
import doge from "@/src/assets/img/doge-meme-icon.jpg";
import {LOGIN, PROFILE} from "@/src/lib/utils/constants";
import nookies from "nookies";

export const Header = () => {
  const router = useRouter();
  const logged = getUserSession();

  const _logout = () => {
    nookies.destroy(null, "user");
    if (!getUserSession()) {
      router.push(LOGIN);
    }
  };

  return (
    <div className="fixed left-0 top-0 flex h-12 w-full items-center justify-between gap-10 bg-dark-100 px-3">
      <button
        className="text-light logoutButton w-fit cursor-pointer rounded-md bg-dark-200 px-2 py-1 text-sm text-primary-200 hover:bg-dark-300"
        onClick={_logout}
      >
        Logout
      </button>

      <InputField
        name="query"
        placeholder={`Search`}
        className="m-0 border-gray-600 bg-dark-200 py-[0.35rem] text-sm text-gray-300 hover:border-gray-500"
        root="w-3/4"
      />

      <Link href={PROFILE} title={logged?.name || "dummy"}>
        <Avatar
          src={logged?.image || doge}
          className="h-8 w-8 rounded-full hover:ring-2 hover:ring-accent-300"
        />
      </Link>
    </div>
  );
};
