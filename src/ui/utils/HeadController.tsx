import {PropsWithChildren} from "react";
import Head from "next/head";

export type HeadControllerProps = PropsWithChildren<{
  title: string;
}>;

export const HeadController = ({title, children}: HeadControllerProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </>
  );
};
