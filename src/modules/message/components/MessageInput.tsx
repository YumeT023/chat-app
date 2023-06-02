import {InputField} from "@/src/ui/form";
import {FormEvent, useRef} from "react";

export type MessageInputProps = {
  onSend(message: string): void;
};

export const MessageInput = ({onSend}: MessageInputProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const submit = (ev: FormEvent) => {
    ev.preventDefault();
    const input = inputRef.current;

    if (input) {
      const message = input.value;
      onSend(message);
      input.value = "";
    }
  };

  return (
    <form className="h-full w-full rounded-md" onSubmit={submit}>
      <InputField
        ref={inputRef}
        name="message"
        root="h-full"
        className="h-full w-full border-dark-300 bg-dark-100"
      />
    </form>
  );
};
