import Link from "next/link";
import {SidebarPanelContainer} from "@/src/modules/layout";
import {Avatar} from "@/src/ui/avatar";
import doge from "@/src/assets/img/doge-meme-icon.jpg";
import {SelectionBackdrop} from "@/src/ui/box";
import {CollapsibleMenu} from "@/src/ui/menu";
import {useRouter} from "next/router";
import {memo} from "react";

export type SidePanelProps = {
  username: string;
};

const SidePanelComponent = ({username}: SidePanelProps) => {
  const {route} = useRouter();

  return (
    <SidebarPanelContainer className="bg-dark-100 text-gray-300 ">
      <div className="ml-1.5 flex h-14 items-center border-y border-y-dark-300">
        <Avatar src={doge} className="mr-2 mt-0 h-9 w-9" />
        <span className="text-xl font-semibold text-white">{username}</span>
      </div>

      <div className="mt-4 flex flex-col">
        <CollapsibleMenu
          header={{
            label: "Channels",
            href: "/channel",
          }}
          className="mb-2"
          expandedByDefault={route === "/channels"}
        >
          <SelectionBackdrop className="w-full py-0.5 text-left">
            <Link href="/profile">Random</Link>
          </SelectionBackdrop>
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
