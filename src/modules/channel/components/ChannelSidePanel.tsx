import Link from "next/link";
import {SidebarPanelContainer} from "@/src/modules/layout";
import {Channel} from "@/src/modules/channel/types";
import {Avatar} from "@/src/ui/avatar";
import {VscRepoPull} from "react-icons/vsc";
import {FiHash} from "react-icons/fi";
import {MdPerson} from "react-icons/md";
import doge from "@/src/assets/img/doge-meme-icon.jpg";

export type ChannelSidePanelProps = {
  channels: Channel[];
};

export const ChannelSidePanel = ({channels}: ChannelSidePanelProps) => {
  return (
    <SidebarPanelContainer className="bg-dark-100">
      <div className="ml-1.5 flex h-14 items-center border-y border-y-dark-300">
        <Avatar src={doge} className="mr-2 mt-0 h-9 w-9" />
        <span className="text-xl font-semibold text-white">Sleek</span>
      </div>

      <div className="mt-4 flex flex-col">
        <Link
          href="/channel"
          className="mb-1 flex w-full items-center gap-3 border-b border-b-dark-300 px-2 py-2 text-primary-200 text-opacity-90 hover:text-opacity-100"
        >
          <VscRepoPull className="h-6 w-6" />
          <div>Channel</div>
        </Link>

        <div className="flex max-h-[32rem] flex-col overflow-y-auto">
          {channels.map((channel) => (
            <Link
              key={channel.id}
              href={`/channel/${channel.id}`}
              className="mb-1 flex w-full items-center gap-3 border-b border-b-dark-300 px-2 py-2 text-primary-200 text-opacity-90 hover:text-opacity-100"
            >
              <FiHash className="h-6 w-6" />
              <div>{channel.name}</div>
            </Link>
          ))}
        </div>

        <Link
          href="/profile"
          className="mb-1 flex w-full items-center gap-3 border-b border-b-dark-300 px-2 py-2 text-primary-200 text-opacity-90 hover:text-opacity-100"
        >
          <MdPerson className="h-6 w-6" />
          <div>Profile</div>
        </Link>
      </div>
    </SidebarPanelContainer>
  );
};
