import {Checkbox, FormWrapper, InputField, Radio} from "@/src/ui/form";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {createSchemas} from "@/src/modules/channel/utils/schemas";
import {Button} from "@/src/ui/button";
import {channel, user} from "@/src/store";
import {useRouter} from "next/navigation";
import {FullPageLoading} from "@/src/ui/loading";
import {useEffect} from "react";

export const CreateChannel = () => {
  const isLoading = channel((state) => state.isLoading);
  const create = channel((state) => state.create);
  const users = user((state) => state.users);
  const getUsers = user((state) => state.getAll);
  const {push} = useRouter();
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      name: "",
      type: "public",
      members: [],
    },
    resolver: yupResolver(createSchemas),
  });

  useEffect(() => {
    getUsers();
  }, []);

  const onSubmit = async ({members, ...channel}: any) => {
    const serialized = {...channel, members: members.map(Number)};
    const created = await create(serialized);
    push(`/channel/${created.channel.id}`);
  };

  return (
    <form className="flex h-full flex-col gap-6 px-3 py-5" onSubmit={handleSubmit(onSubmit)}>
      <FullPageLoading isActive={isLoading} />

      <InputField
        explicitName
        placeholder="Name e.g: FunSleek"
        sizeVariant="md"
        variant="dark"
        labelCls="text-primary-200"
        className="w-1/2"
        disabled={isLoading}
        error={`${errors.name?.message ?? ""}`}
        {...register("name")}
      />

      <FormWrapper name="type" labelCls="text-primary-200" error={`${errors.type?.message ?? ""}`}>
        <Radio value="private" {...register("type")} disabled={isLoading} />
        <Radio value="public" {...register("type")} disabled={isLoading} />
      </FormWrapper>

      <FormWrapper name="members" labelCls="text-primary-200">
        {users.map(({id, name}) => (
          <Checkbox
            key={id}
            label={name}
            value={`${id}`}
            disabled={isLoading}
            {...register("members")}
          />
        ))}
      </FormWrapper>

      <Button className="w-fit" loading={isLoading}>
        Create
      </Button>
    </form>
  );
};
