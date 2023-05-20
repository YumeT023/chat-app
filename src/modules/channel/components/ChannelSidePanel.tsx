import Link from "next/link";
import {SidebarPanelContainer} from "@/src/modules/layout";
import {Avatar} from "@/src/ui/avatar";
import {channel} from "@/src/store";
import {VscRepoPull} from "react-icons/vsc";
import {FiHash} from "react-icons/fi";
import {useEffect} from "react";
import doge from "@/src/assets/img/doge-meme-icon.jpg";

export const ChannelSidePanel = () => {
  const channels = channel((x) => x.channels);
  const getAll = channel((x) => x.getAll);

  useEffect(() => {
    getAll();
  }, []);

  return (
    <SidebarPanelContainer className="bg-dark-100">
      <div className="ml-1.5 flex h-14 items-center border-y border-y-dark-300">
        <Avatar src={doge} className="mr-2 mt-0 h-9 w-9" />
        <span className="text-xl font-semibold text-white">Sleek</span>
      </div>

      <div>
        <Link
          href="/channel"
          className="mb-1 flex w-full items-center gap-3 border-b border-b-dark-300 px-2 py-2 text-primary-200 text-opacity-90 hover:text-opacity-100"
        >
          <VscRepoPull className="h-6 w-6" />
          <div>Channels</div>
        </Link>
      </div>

      <div className="mt-4 flex flex-col">
        {channels.channels.map((channel) => (
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
    </SidebarPanelContainer>
  );
};
