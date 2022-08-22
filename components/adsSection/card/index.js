

//Next
import Image from 'next/image'
import Link from 'next/link'


export default function AdCard({ carImage }) {
  return (
    <div className="w-[327px] lg:w-[640px] h-[240px] lg:h-[360px] p-4 lg:p-6 border m-auto box-border bg-blue-light rounded-xl overflow-hidden">
    <div className="w-full">
      <h1 className="font-normal text-base lg:text-[32px] lg:w-[272px] lg:leading-9 lg:text-start text-white mb-3">The Best Platform for Car Rental</h1>
      <p className="text-xs text-white mb-4 lg:text-base lg:leading-6 lg:w-[272px]">Ease of doing a car rental safely and reliably. Of course at a low price.</p>
      <button className="bg-blue-dark py-2 px-4 rounded-md w-32 h-11 mb-3">
        <Link href="#">
          <a className="text-white">Rental Car</a>
        </Link>
      </button>
    </div>

    <div className="card-footer w-full flex justify-center item-center">
      <div className="w-[196px] h-[56px] lg:w-[406px] lg:h-[116px] relative">
        <Image
          src={carImage}
          layout="fill"
          alt="car"
        />
      </div>
    </div>
  </div>
  )
}
