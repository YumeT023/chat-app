import Link from "next/link";
import {SidebarPanelContainer} from "@/src/modules/layout";
import {Avatar} from "@/src/ui/avatar";
import doge from "@/src/assets/img/doge-meme-icon.jpg";
import {MdAdd} from "react-icons/md";
import {SelectionBackdrop} from "@/src/ui/box";
import {CollapsibleMenu} from "@/src/ui/menu";
import {useRouter} from "next/router";
import {memo, useMemo} from "react";
import {AuthenticatedUser} from "@/src/modules/user/types";
import useSWR from "swr";
import {getChannels, getUsers} from "@/src/lib/api";
import {CHANNEL, MESSAGE, PROFILE} from "@/src/lib/utils/constants";

export type SidePanelProps = {
  user: AuthenticatedUser;
};

const SidePanelComponent = ({user}: SidePanelProps) => {
  const {route, query} = useRouter();
  const {isLoading: loadingChannel, data: channels = []} = useSWR("/channels", () =>
    getChannels(user.token)
  );
  const {isLoading: loadingUsers, data: users = []} = useSWR("/users", () => getUsers(user.token));

  const atChannelRoute = useMemo(() => route.includes(CHANNEL), [route]);
  const atMessageRoute = useMemo(() => route.includes(MESSAGE), [route]);

  return (
    <SidebarPanelContainer className="bg-dark-100 text-gray-300 ">
      <div className="ml-1.5 flex h-14 items-center border-y border-y-dark-300">
        <Avatar src={doge} className="mr-2 mt-0 h-9 w-9" />
        <Link href={PROFILE}>
          <SelectionBackdrop className="text-xl font-semibold text-white">
            {user.name}
          </SelectionBackdrop>
        </Link>
      </div>

      <div className="mt-4 flex flex-col">
        <CollapsibleMenu
          header={{
            label: "Channels",
            href: CHANNEL,
          }}
          loading={loadingChannel}
          className="mb-2"
          expandedByDefault
        >
          {channels.map((channel) => {
            const isSelected = atChannelRoute && (query.cid as string) === String(channel.id);
            return (
              <Link href={`${CHANNEL}/${channel.id}`} key={channel.id}>
                <SelectionBackdrop
                  className={"w-full py-0.5 text-left text-sm "}
                  selected={isSelected}
                >
                  # {channel.name}
                </SelectionBackdrop>
              </Link>
            );
          })}
          <Link href={`${CHANNEL}/create`}>
            <SelectionBackdrop
              className="flex w-full items-center py-0.5 text-left text-sm"
              selected={atChannelRoute && route.includes("create")}
            >
              <MdAdd className="font-bold" /> Add channel
            </SelectionBackdrop>
          </Link>
        </CollapsibleMenu>

        <CollapsibleMenu
          header={{
            label: "Direct Messages",
          }}
          loading={loadingUsers}
          expandedByDefault
        >
          {users.map((user) => {
            const isSelected = atMessageRoute && (query.uid as string) === String(user.id);
            return (
              <Link href={`${MESSAGE}/${user.id}`} key={user.id}>
                <SelectionBackdrop
                  className="w-full py-0.5 text-left text-sm"
                  selected={isSelected}
                >
                  {user.name}
                </SelectionBackdrop>
              </Link>
            );
          })}
        </CollapsibleMenu>
      </div>
    </SidebarPanelContainer>
  );
};

export const SidePanel = memo(SidePanelComponent);
