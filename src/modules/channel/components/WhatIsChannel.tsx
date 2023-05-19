import {FiMessageCircle} from "react-icons/fi";
import {VscNewFile} from "react-icons/vsc";
import {Flex} from "@/src/ui/box";
import Link from "next/link";

export const WhatIsChannel = () => {
  return (
    <div className="h-full">
      <Flex className="max-h-fit flex-col items-center justify-center px-5 py-7">
        <FiMessageCircle className="h-20 w-20 self-start text-accent-100" />
        <div className="w-5/6 text-primary-200 md:text-2xl">
          Channels bring order and clarity to work — you can create them for any project, topic, or
          team. With the right people and information in one place, teams can share ideas, make
          decisions, and move work forward.
        </div>
      </Flex>

      <div className="ml-16 flex-col text-accent-100">
        <Link className="flex items-center gap-2 py-2 opacity-95 hover:opacity-100" href="">
          <VscNewFile /> Create channel
        </Link>
      </div>
    </div>
  );
};
