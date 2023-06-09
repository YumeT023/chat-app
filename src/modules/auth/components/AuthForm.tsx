import {BaseSyntheticEvent, ComponentType, PropsWithChildren, ReactNode} from "react";
import {Flex} from "@/src/ui/box";
import {Avatar} from "@/src/ui/avatar";
import {Button} from "@/src/ui/button";
import doge from "@/src/assets/img/doge-meme-icon.jpg";
import Link from "next/link";

export type AuthFormProps = PropsWithChildren<{
  title: string;
  name: string;
  submitBtn: ReactNode;
  disabled?: boolean;
  alt: {
    text: string;
    to: string;
    label: string;
  };
  handleSubmit: (e?: BaseSyntheticEvent) => void;
}>;

export const AuthForm = ({
  title,
  children,
  submitBtn,
  name,
  alt,
  handleSubmit,
}: AuthFormProps) => {
  const {text, label, to} = alt;
  return (
    <Flex fullSize center>
      <form
        onSubmit={handleSubmit}
        className="w-[30rem] rounded-xl bg-white p-5"
        name={name}
        noValidate
      >
        <div className="mb-2 flex justify-center">
          <Avatar src={doge} />
        </div>

        <div className="pb-3 text-center text-4xl font-bold text-accent-300">{title}</div>

        <div className="w-full pb-3 pt-2">{children}</div>

        <div className="flex justify-center">
          {submitBtn}
        </div>

        <div className="pt-6 text-center text-dark-200">
          <span className="mr-1">{text}</span>
          <Link href={to} className="text-accent-100 hover:underline">
            {label}
          </Link>
        </div>
      </form>
    </Flex>
  );
};
