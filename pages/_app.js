import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div>
        Navbar
      </div>
      <div>
        <Component {...pageProps} />
      </div>
      <div>
        Footer
      </div>

    </>
  )
}

export default MyApp
