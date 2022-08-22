//next
import Link from "next/link";

import Car1 from '@assets/cars/car1.svg'
import Car1b from '@assets/cars/car1b.svg'
import Car2 from '@assets/cars/car2.svg'
import Image from "next/image";

export function AdsSection() {
  return (
    <section className="w-full flex items-center justify-between gap-9 mt-3 mb-8 lg:mt-8 ">
      <div className="w-[327px] lg:w-[640px] h-[240px] lg:h-[360px] border m-auto box-border bg-blue-light rounded-xl relative overflow-hidden">
        <Image
          src="/ellipseBG.svg"
          layout="fill"
          alt="ellipse"
        />
        <div className="absolute top-0 z-10 p-4 lg:p-6 border border-red-600">
          <h1 className="font-normal text-base lg:text-[32px] lg:w-[272px] lg:leading-9 lg:text-start text-white mb-3">The Best Platform for Car Rental</h1>
          <p className="text-xs text-white mb-4 lg:text-base lg:leading-6 lg:w-[272px]">Ease of doing a car rental safely and reliably. Of course at a low price.</p>
          <button className="bg-blue-dark py-2 px-4 rounded-md w-32 h-11 mb-9">
            <Link href="#">
              <a className="text-white">Rental Car</a>
            </Link>
          </button>
          <div className="w-full flex justify-center items-center m-auto">
            <Car1  className="lg:hidden"/>
            <Car1b className="hidden lg:block"/>
          </div>
        </div>
      </div>
    </section>
  )
}
