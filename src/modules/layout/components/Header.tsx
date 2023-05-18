import {Avatar} from "@/src/ui/avatar";
import {auth} from "@/src/store";
import {InputField} from "@/src/ui/form";
import doge from "@/src/assets/img/doge-meme-icon.jpg";

export const Header = () => {
  const logged = auth((state) => state.loggedUser);

  return (
    <div className="fixed top-0 left-0 h-12 w-full px-3 bg-dark-100 flex items-center justify-between gap-10">
      <div className="w-56"></div>

      <InputField
        placeholder={`Search ${logged?.user.name ?? ""}`}
        className="py-[0.35rem] m-0 bg-dark-200 text-gray-300 text-sm border-gray-600 hover:border-gray-500"
        root="w-3/4"
      />

      <div title={logged?.user.name || "dummy"}>
        <Avatar src={logged?.user.image || doge} className="h-8 w-8" />
      </div>
    </div>
  );
};
