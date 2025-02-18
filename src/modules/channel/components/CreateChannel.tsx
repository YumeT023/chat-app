import useSWRMutation from "swr/mutation";
import useSWR, {Key} from "swr";
import {Checkbox, FormWrapper, InputField, Radio} from "@/src/ui/form";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {createSchemas} from "@/src/modules/channel/schemas";
import {Button} from "@/src/ui/button";
import {useRouter} from "next/navigation";
import {FullPageLoading} from "@/src/ui/loading";
import {createChannel, getUsers} from "@/src/lib/api";
import {AuthenticatedUser, User} from "@/src/modules/user/types";
import {Channel, CreateChannel as CreateChannelType} from "@/src/modules/channel/types";
import {CHANNEL} from "@/src/lib/utils/constants";

export type CreateChannelProps = {
  user: AuthenticatedUser;
};

const createChannelMutation = <T = Key,>(token: string) => {
  return async (key: T, {arg}: {arg: CreateChannelType}) =>
    (await createChannel(token, arg)) as Channel;
};

export const CreateChannel = ({user}: CreateChannelProps) => {
  const {push} = useRouter();
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

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      channelName: "",
      type: "public",
      members: [],
    },
    resolver: yupResolver(createSchemas),
  });

  const onSubmit = async ({members, channelName: name, ...channel}: any) => {
    const serialized = {...channel, name, members: members.map(Number)};

    const created = await trigger(serialized);
    if (created) {
      push(`${CHANNEL}/${created.id}`);
    }
  };

  return (
    <form
      className="flex h-full flex-col gap-6 px-5 pt-5"
      name="createChannelForm"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FullPageLoading isActive={isLoading || isMutating} />

      <InputField
        explicitName
        label="name"
        placeholder="Name e.g: FunSleek"
        sizeVariant="md"
        variant="dark"
        labelCls="text-primary-200"
        className="w-1/2"
        disabled={isLoading}
        error={`${errors.channelName?.message ?? ""}`}
        {...register("channelName")}
      />

      <FormWrapper name="type" labelCls="text-primary-200" error={`${errors.type?.message ?? ""}`}>
        <Radio value="private" {...register("type")} disabled={isLoading} />
        <Radio value="public" {...register("type")} disabled={isLoading} />
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

      <Button className="createChannelButton mb-5 w-fit" loading={isLoading}>
        Create Channel{" "}
      </Button>

      <div className="pb-2"></div>
    </form>
  );
};
