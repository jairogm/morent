//next
import Link from "next/link";

import Image from "next/image";
import AdCard from "./card";

export function AdsSection() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-center  md:justify-between gap-9 mt-3 mb-8 lg:mt-8 ">
      {/* Card #1 */}
      <AdCard
        carImage={"/car1.svg"}
      />
      {/* Card #2 */}
      <AdCard className="hidden lg:block"
        carImage={"/car2.svg"}
      />
    </section>
  )
}
