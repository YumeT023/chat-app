import {FormWrapper, InputField, Radio} from "@/src/ui/form";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {createSchemas} from "@/src/modules/channel/utils/schemas";
import {Button} from "@/src/ui/button";
import {channel} from "@/src/store";

export const CreateChannel = () => {
  const create = channel((state) => state.create);
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      name: "",
      type: "public",
    },
    resolver: yupResolver(createSchemas),
  });

  const onSubmit = async (values: any) => {
    const created = await create({...values, members: []});
  };

  return (
    <form className="flex h-full flex-col gap-6 px-3 py-5" onSubmit={handleSubmit(onSubmit)}>
      <InputField
        explicitName
        placeholder="Name e.g: FunSleek"
        sizeVariant="md"
        variant="dark"
        labelCls="text-primary-200"
        className="w-1/2"
        error={`${errors.name?.message ?? ""}`}
        {...register("name")}
      />

      <FormWrapper name="type" labelCls="text-primary-200" error={`${errors.type?.message ?? ""}`}>
        <Radio value="private" {...register("type")} />
        <Radio value="public" {...register("type")} />
      </FormWrapper>

      <Button className="w-fit">Create</Button>
    </form>
  );
};
