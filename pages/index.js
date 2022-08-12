//next
import Head from "next/head";

//components
import { AdsSection } from "@components/adsSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Morent</title>
        <link rel="icon" href="/favicon.ico" />
       </Head>
      <AdsSection />
    </>
  )
}
