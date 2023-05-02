import {Provider} from 'react-redux';
import type {AppProps} from 'next/app';
import store from '@/store/store';
import Header from '@/components/Layout/Header';
import {GlobalStyle} from '@/styles/globalStyle';

export default function App({Component, pageProps}: AppProps) {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Header />
      <div className="container">
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}
