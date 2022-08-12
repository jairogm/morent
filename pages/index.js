//next
import Head from "next/head";

//components
import { adsSection } from "@components/adsSection";


export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | Morent</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <adsSection />
    </div>
  )
}
