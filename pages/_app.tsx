import { AppProps } from 'next/app';
import '../styles/Home.module.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
