import {Button} from "@/src/ui/button";
import {Channel} from "@/src/modules/channel/types";
import {Checkbox, FormWrapper} from "@/src/ui/form";
import Link from "next/link";
import {AuthenticatedUser, User} from "@/src/modules/user/types";
import useSWR, {Key} from "swr";
import {addMembersToChannel, getUsers} from "@/src/lib/api";
import {FullPageLoading} from "@/src/ui/loading";
import useSWRMutation from "swr/mutation";
import {useForm} from "react-hook-form";
import {useRouter} from "next/navigation";
import {CHANNEL} from "@/src/lib/utils/constants";

export type EditChannelProps = {
  toEdit: Channel;
  user: AuthenticatedUser;
};

const createChannelMutation = <T = Key,>(token: string) => {
  return async (key: T, {arg}: {arg: {cid: number; members: number[]}}) =>
    (await addMembersToChannel(token, arg.cid, arg.members)) as Channel;
};

export const EditChannel = ({toEdit, user}: EditChannelProps) => {
  const router = useRouter();

  const {
    isLoading,
    data: users = [],
    error: fetchUserError,
  } = useSWR("/users", () => getUsers(user.token));

  const {
    error: createChannelError,
    trigger,
    isMutating,
  } = useSWRMutation(`/channel`, createChannelMutation(user.token));

  const {register, handleSubmit} = useForm({
    defaultValues: {
      members: [],
    },
  });

  const {name, type, owner} = toEdit;

  const editChannel = async (payload: any) => {
    const edited = await trigger({
      cid: toEdit.id,
      members: payload.members,
    });
    if (edited) {
      router.push(`${CHANNEL}/${toEdit.id}`);
    }
  };

  return (
    <form className="flex h-full flex-col gap-6 px-3 py-5" name="editChannelForm" onSubmit={handleSubmit(editChannel)}>
      <FullPageLoading isActive={isLoading || isMutating} />

      <FormWrapper name="name" labelCls="text-primary-200">
        <Link
          href={`/channel/${toEdit.id}`}
          className="ml-2 text-accent-100 underline-offset-1 hover:underline"
        >
          {name}
        </Link>
      </FormWrapper>

      <FormWrapper name="owner" labelCls="text-primary-200">
        <div className="ml-2 text-accent-100">{owner.name}</div>
      </FormWrapper>

      <FormWrapper name="members" labelCls="text-primary-200">
        {((users as User[]) || []).map(({id, name}) => (
          <Checkbox
            key={id}
            label={name}
            value={`${id}`}
            disabled={isLoading}
            {...register("members")}
          />
        ))}
      </FormWrapper>

      <Button className="w-fit">Update</Button>
    </form>
  );
};
