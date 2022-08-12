import {Footer} from '@components/footer'
import {Navbar} from '@components/navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className='w-screen h-screen'>
      <Navbar />
      <div className='px-16'>
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  )
}

export default MyApp
