//Icons
import Heart from '@icons/heart-dark.svg'
import Notifications from '@icons/notification-dark.svg'
import Setting from '@icons/setting-dark.svg'

//Components
import { SearchBar } from '@components/searchBar'

//Nextjs
import Image from 'next/image'

export function Navbar() {
  return (
    <nav className='bg-white w-full h-[160px] pb-5 flex items-center justify-center sm:h-[124px] sm:pb-0'>
      <div className='px-6 w-full h-40 flex  items-center justify-between flex-wrap md:flex-row sm:h-12 lg:px-16'>
        <div className='w-[108px] h-7 md:w-[148px] md:h-11 order-first'>
          <Image
            src='/logo.svg'
            alt='Morent logo'
            width={148}
            height={44}
            priority={true}
          />
        </div>

        <ul className='flex gap-3 order-2 sm:order-last'>
          <li className='border rounded-full w-11 h-11 hidden lg:flex lg:items-center lg:justify-center'>
            <Heart />
          </li>
          <li className='border rounded-full w-11 h-11 hidden lg:flex lg:items-center lg:justify-center'>
            <Notifications />
          </li>
          <li className='border rounded-full w-11 h-11 hidden lg:flex lg:items-center lg:justify-center'>
            <Setting />
          </li>
          <li className='rounded-full w-7 h-7 sm:w-11 sm:h-11'>
            <Image
              src='https://randomuser.me/api/portraits/women/33.jpg'
              alt='profile picture'
              width={44}
              height={44}
              className="rounded-full"
            />
          </li>
        </ul>
        <div className='order-last sm:order-2 w-full flex items-center justify-center sm:w-[463px] lg:w-[492px]'>
          <SearchBar />
        </div>
      </div>
    </nav>
  )
}

