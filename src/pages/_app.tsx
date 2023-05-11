import {Provider} from 'react-redux';
import type {AppProps} from 'next/app';
import store from '@/store/store';
import Header from '@/components/Layout/Header';
import {GlobalStyle} from '@/styles/globalStyle';
import Container from '@/components/Container';

export default function App({Component, pageProps}: AppProps) {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Header />
      <Container>
        <Component {...pageProps} />
      </Container>
    </Provider>
  );
}
