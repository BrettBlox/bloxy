// @ts-check
import ThemeContextProvider from 'context/theme-context'
import 'styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <Component {...pageProps} />
    </ThemeContextProvider>
  )
}

export default MyApp
