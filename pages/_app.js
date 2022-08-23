import { Footer } from '@components/footer'
import { Navbar } from '@components/navbar'
import '../styles/globals.css'

function Morent({ Component, pageProps }) {
  return (
    <div className='w-[100vw] h-screen 1xl:w-[1440px] mx-auto font-jakarta box-border overflow-x-hidden'>
      <Navbar />
      <div className='px-6 bg-[#F6F7F9] lg:px-20 box-border'>
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  )
}

export default Morent
