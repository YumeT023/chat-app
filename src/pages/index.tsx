import {useEffect} from "react";
import {useRouter} from "next/navigation";
import {Flex} from "../ui/box";
import {HeadController} from "@/src/ui/display";
import {Avatar} from "@/src/ui/avatar";
import doge from "@/src/assets/img/doge-meme-icon.jpg";

const HomePage = () => {
  const {push} = useRouter();

  useEffect(() => {
    push("/profile");
  }, [push]);

  return (
    <HeadController title="home • sleek">
      <Flex center fullSize className="bg-amber-900">
        <div className="w-[30rem] p-5 rounded-md bg-amber-100">
          <Flex center>
            <Avatar src={doge} />
          </Flex>
          <div className="font-semibold text-2xl text-center py-5 text-amber-800">Welcome back</div>
        </div>
      </Flex>
    </HeadController>
  );
};

export default HomePage;
