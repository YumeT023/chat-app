import {MultilineField} from "@/src/ui/form";
import {useEffect, useRef} from "react";
import {MdSend} from "react-icons/md";

export type MessageInputProps = {
  onSend(message: string): void;
};

export const MessageInput = ({onSend}: MessageInputProps) => {
  const messageRef = useRef<HTMLTextAreaElement | null>(null);
  const ring = "focus:ring-gray-600 focus:ring-1";

  useEffect(() => {
    const handleInputChange = (ev: KeyboardEvent) => {
      if (ev.key === "Enter") {
        if (!ev.ctrlKey) {
          ev.preventDefault();
          submit();
        } else {
          const val = messageRef.current!.value;
          messageRef.current!.value = val + "\n";
        }
      }
    };

    messageRef.current?.addEventListener("keydown", handleInputChange);

    return () => {
      messageRef.current?.removeEventListener("keydown", handleInputChange);
    };
  }, []);

  const submit = () => {
    const input = messageRef.current;

    if (input) {
      const message = input.value;
      onSend(message);
      input.value = "";
    }
  };

  return (
    <form
      className="h-full w-full rounded-md"
      onSubmit={(ev) => {
        ev.preventDefault();
        submit();
      }}
    >
      <div className="flex h-full w-full justify-evenly">
        <MultilineField
          ref={messageRef}
          name="message"
          root="h-full multiline md:w-[90%] w-[95%]"
          className={`h-full w-full resize-none border-dark-300 bg-dark-100 bg-opacity-50 text-primary-200 ${ring}`}
        />
        <div className="flex w-[15%] items-center justify-center md:w-[10%]">
          <button className="flex items-center justify-center rounded-full border border-dark-300 bg-dark-100 p-2 hover:bg-dark-200">
            <MdSend className="h-6 w-6 text-primary-200" />
          </button>
        </div>
      </div>
    </form>
  );
};
