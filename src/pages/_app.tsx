import "@/src/styles/globals.css";
import "nprogress/nprogress.css";
import type {AppProps} from "next/app";
import {MainContainer} from "../modules/layout";
import NProgress from "nprogress";
import localFont from "next/font/local";
import router from "next/router";
import {useEffect} from "react";

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
  useEffect(() => {
    router.events.on("routeChangeStart", () => NProgress.start());
    router.events.on("routeChangeComplete", () => NProgress.done());
    router.events.on("routeChangeError", () => NProgress.done());

    return () => {
      // unsubscribe
      router.events.on("routeChangeStart", () => NProgress.start());
      router.events.on("routeChangeComplete", () => NProgress.done());
      router.events.on("routeChangeError", () => NProgress.done());
    };
  }, []);

  return (
    <MainContainer className={larsseit.className}>
      <Component {...pageProps} />
    </MainContainer>
  );
}
