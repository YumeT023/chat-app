import Link from "next/link";
import {SidebarPanelContainer} from "@/src/modules/layout";
import {Avatar} from "@/src/ui/avatar";
import doge from "@/src/assets/img/doge-meme-icon.jpg";
import {SelectionBackdrop} from "@/src/ui/box";
import {CollapsibleMenu} from "@/src/ui/menu";
import {useRouter} from "next/router";
import {memo} from "react";
import {AuthenticatedUser} from "@/src/modules/user/types";
import useSWR from "swr";
import {getChannels} from "@/src/lib/api";

export type SidePanelProps = {
  user: AuthenticatedUser;
};

const SidePanelComponent = ({user}: SidePanelProps) => {
  const {route} = useRouter();
  const {isLoading: loadingChannel, data: channels = []} = useSWR("/channels", () =>
    getChannels(user.token)
  );

  return (
    <SidebarPanelContainer className="bg-dark-100 text-gray-300 ">
      <div className="ml-1.5 flex h-14 items-center border-y border-y-dark-300">
        <Avatar src={doge} className="mr-2 mt-0 h-9 w-9" />
        <span className="text-xl font-semibold text-white">{user.name}</span>
      </div>

      <div className="mt-4 flex flex-col">
        <CollapsibleMenu
          header={{
            label: "Channels",
            href: "/channel",
          }}
          loading={loadingChannel}
          className="mb-2"
          expandedByDefault={route === "/channels"}
        >
          {channels.map((channel) => (
            <SelectionBackdrop className="w-full py-0.5 text-left" key={channel.id}>
              <Link href={`/channel/${channel.id}`}>{channel.name}</Link>
            </SelectionBackdrop>
          ))}
        </CollapsibleMenu>

        <CollapsibleMenu
          header={{
            label: "Direct Messages",
          }}
        >
          <SelectionBackdrop className="w-full py-0.5 text-left">
            <Link href="/profile">Yume</Link>
          </SelectionBackdrop>
        </CollapsibleMenu>
      </div>
    </SidebarPanelContainer>
  );
};

export const SidePanel = memo(SidePanelComponent);
