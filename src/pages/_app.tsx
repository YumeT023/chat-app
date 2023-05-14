import "@/src/styles/globals.css";
import {Container} from "@/src/ui/layout";
import type {AppProps} from "next/app";

export default function App({Component, pageProps}: AppProps) {
  return (
    <Container>
      <Component {...pageProps} />
    </Container>
  );
}
