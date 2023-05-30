import {InputField} from "@/src/ui/form";

export const MessageInput = () => {
  return (
    <div className="h-full w-full rounded-md">
      <InputField name="message" root="h-full" className="h-full w-full bg-dark-100 border-dark-300" />
    </div>
  );
};
