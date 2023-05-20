import {Button} from "@/src/ui/button";
import {Channel} from "@/src/modules/channel/types";
import {FormWrapper, InputField} from "@/src/ui/form";

export type EditChannelProps = {
  toEdit: Channel["channel"];
};

export const EditChannel = ({toEdit}: EditChannelProps) => {
  const {name, type, owner} = toEdit;

  return (
    <form className="flex h-full flex-col gap-6 px-3 py-5">
      <FormWrapper name="name" labelCls="text-primary-200">
        <div className="ml-2 text-accent-100">{name}</div>
      </FormWrapper>

      <FormWrapper name="owner" labelCls="text-primary-200">
        <div className="ml-2 text-accent-100">{owner.name}</div>
      </FormWrapper>

      <FormWrapper name="Email" labelCls="text-primary-200">
        <div className="ml-2 text-accent-100">{owner.email}</div>
      </FormWrapper>

      <Button className="w-fit">Update</Button>
    </form>
  );
};
