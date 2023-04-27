import "@/styles/globals.css";
import Nav from "./api/auth/Nav";
// import type { AppProps } from "next/app";
import React from "react";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${roboto.className} mx-5 xl:mx-56 md:mx-28 bg-grey-200 h-screen` }>
      <Nav />

      <Component {...pageProps} />
    </main>
  );
}
