import Layout from "@/components/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "swiper/css";
import "animate.css";

import "aos/dist/aos.css";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
