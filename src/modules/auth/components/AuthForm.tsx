import {BaseSyntheticEvent, PropsWithChildren} from "react";
import {Flex} from "@/src/ui/box";
import {Avatar} from "@/src/ui/avatar";
import {Button} from "@/src/ui/button";
import doge from "@/src/assets/img/doge-meme-icon.jpg";
import Link from "next/link";

export type AuthFormProps = PropsWithChildren<{
  title: string;
  submitLabel: string;
  isLoading?: boolean;
  alt: {
    text: string;
    to: string;
    label: string;
  };
  handleSubmit: (e?: BaseSyntheticEvent) => void;
}>;

export const AuthForm = ({
  title,
  submitLabel,
  alt,
  handleSubmit,
  children,
  isLoading = false,
}: AuthFormProps) => {
  const {text, label, to} = alt;
  return (
    <Flex fullSize center>
      <form onSubmit={handleSubmit} className="w-[30rem] rounded-xl p-5 bg-white">
        <div className="flex justify-center mb-2">
          <Avatar src={doge} />
        </div>

        <div className="text-center text-4xl pb-3 font-bold text-accent-300">
          {title}
        </div>

        <div className="w-full pt-2 pb-3">{children}</div>

        <div className="flex justify-center">
          <Button loading={isLoading}>{submitLabel}</Button>
        </div>

        <div className="text-center pt-6 text-primary-dark">
          <span className="mr-1">{text}</span>
          <Link href={to} className="hover:underline text-accent-100">
            {label}
          </Link>
        </div>
      </form>
    </Flex>
  );
};
