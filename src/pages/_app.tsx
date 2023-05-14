import "@/src/styles/globals.css";
import {MainContainer} from "../modules/layout";
import type {AppProps} from "next/app";

export default function App({Component, pageProps}: AppProps) {
  return (
    <MainContainer>
      <Component {...pageProps} />
    </MainContainer>
  );
}
