// pages/_app.tsx

import { AppProps } from 'next/app'
import Layout from '../components/Layout'; // Ensure this path is correct and component exists
import '../styles/globals.css'; // Ensure this file exists

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp