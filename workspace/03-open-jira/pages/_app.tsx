import type { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';

import { UIProvider } from '../context/ui';
import '../styles/globals.css';
import { darkTheme, lightTheme } from '../themes';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <UIProvider>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </UIProvider>
  );
}
