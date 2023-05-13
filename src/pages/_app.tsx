import {Provider} from 'react-redux';
import type {AppProps} from 'next/app';
import store from '@/store/store';
import Header from '@/components/Layout/Header/Header';
import {GlobalStyle} from '@/styles/globalStyle';
import Container from '@/components/Container';
import {ThemeProvider} from 'styled-components';
import theme from '@/styles/theme';

export default function App({Component, pageProps}: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Container>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </Provider>
  );
}
