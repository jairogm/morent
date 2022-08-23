//Next

import Image from "next/image";

//Components
import { FooterLinks } from "./footerLinks";

export function Footer() {
  return (
    <footer className=" w-full h-[380px] flex flex-col  px-6 pt-20 lg:px-16 sm:bg-white ">
      <div className="sm:flex sm:flex-wrap sm:justify-between">
        <div className="flex flex-col gap-2 w-56 h-[92px] mb-6">
          <div className='w-[108px] h-7 md:w-[148px] md:h-11 mb-2'>
            <Image
              src='/logo.svg'
              alt='Morent logo'
              width={148}
              height={44}
              priority={true}
            />
          </div>
          <p className="text-justify text-xs text-gray-400">Our vision is to provide convenience and help increase your sales business.</p>
        </div>

        <FooterLinks />
      </div>

      <hr className="py-4" />
      <div className="flex flex-wrap gap-8 justify-between w-full">
        <div className="flex w-full justify-between sm:order-last sm:w-[300px]">
          <span>Privacy &#38; Policy</span>
          <span>Terms &#38; Conditions</span>
        </div>
        <span className="sm:order-1">&copy;2022 MORENT. All rights reserved</span>
      </div>
    </footer>
  )
}
