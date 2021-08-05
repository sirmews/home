import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ContextWrapper } from '../utils/state';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContextWrapper>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextWrapper>
  )
}
export default MyApp
