// #region Global Imports
import type { AppProps } from 'next/app';
// #endregion Global Imports

// #region Local Imports
import '../public/reset.css';
// #endregion Local Imports

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default MyApp;
