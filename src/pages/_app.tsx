import "@/src/styles/globals.css";
import {MainContainer} from "../modules/layout";
import type {AppProps} from "next/app";
import localFont from "next/font/local";

const larsseit = localFont({
  src: [
    {
      path: "../assets/font/larsseit/Larsseit.woff2",
      weight: "400",
    },
    {
      path: "../assets/font/larsseit/Larsseit-Bold.woff2",
      weight: "700",
    },
    {
      path: "../assets/font/larsseit/Larsseit-Light.woff2",
      weight: "200",
    },
  ],
});

export default function App({Component, pageProps}: AppProps) {
  return (
    <MainContainer className={larsseit.className}>
      <Component {...pageProps} />
    </MainContainer>
  );
}
