import type { AppProps } from 'next/app';
import { NextUIProvider } from '@nextui-org/react';
import { SessionProvider } from 'next-auth/react';

import '../styles/globals.css'

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <NextUIProvider>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </NextUIProvider>
  );
}
