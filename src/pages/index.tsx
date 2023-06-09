import {useEffect} from "react";
import {useRouter} from "next/navigation";
import {Flex} from "../ui/box";
import {HeadController} from "@/src/ui/display";
import {Avatar} from "@/src/ui/avatar";
import doge from "@/src/assets/img/doge-meme-icon.jpg";
import {PROFILE} from "@/src/lib/utils/constants";

const HomePage = () => {
  const {push} = useRouter();

  useEffect(() => {
    push(PROFILE)
  }, [push]);

  return (
    <HeadController title="home • sleek">
      <Flex center fullSize className="bg-amber-900">
        <div className="w-[30rem] rounded-md bg-amber-100 p-5">
          <Flex center>
            <Avatar src={doge} />
          </Flex>
          <div className="py-5 text-center text-2xl font-semibold text-amber-800">Welcome back</div>
        </div>
      </Flex>
    </HeadController>
  );
};

export default HomePage;
