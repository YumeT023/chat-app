import {Button} from "@/src/ui/button";
import {Channel} from "@/src/modules/channel/types";
import {FormWrapper} from "@/src/ui/form";
import Link from "next/link";

export type EditChannelProps = {
  toEdit: Channel;
};

export const EditChannel = ({toEdit}: EditChannelProps) => {
  const {name, type, owner} = toEdit;

  return (
    <form className="flex h-full flex-col gap-6 px-3 py-5">
      <FormWrapper name="name" labelCls="text-primary-200">
        <Link href={`/channel/${toEdit.id}`} className="ml-2 text-accent-100 hover:underline underline-offset-1">
          {name}
        </Link>
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
