import Link from "next/link";
import {Avatar} from "@/src/ui/avatar";
import {auth} from "@/src/store";
import {InputField} from "@/src/ui/form";
import doge from "@/src/assets/img/doge-meme-icon.jpg";

export const Header = () => {
  const logged = auth((state) => state.loggedUser);

  return (
    <div className="fixed left-0 top-0 flex h-12 w-full items-center justify-between gap-10 bg-dark-100 px-3">
      <div className="w-56"></div>

      <InputField
        placeholder={`Search ${logged?.user.name ?? ""}`}
        className="m-0 border-gray-600 bg-dark-200 py-[0.35rem] text-sm text-gray-300 hover:border-gray-500"
        root="w-3/4"
      />

      <Link href="/profile" title={logged?.user.name || "dummy"}>
        <Avatar src={logged?.user.image || doge} className="h-8 w-8" />
      </Link>
    </div>
  );
};
