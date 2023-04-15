import '../styles/globals.css';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline, createTheme } from '@mui/material';
import type { AppProps } from 'next/app';

const basicTheme = createTheme({
  palette: {
    mode: 'dark'
  }
});


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={basicTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
