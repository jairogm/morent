import {Footer} from '@components/footer'
import {Navbar} from '@components/navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className='w-screen h-screen xl:w-[1440px] m-auto font-jakarta'>
      <Navbar />
      <div className='px-6 bg-[#F6F7F9] lg:px-20'>
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  )
}

export default MyApp
