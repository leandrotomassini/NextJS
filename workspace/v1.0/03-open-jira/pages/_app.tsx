import { AppProps } from "next/app";
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from "@mui/material";

import { darkTheme, lightTheme } from "../themes";
import '../styles/globals.css';
import { UIProvider } from "../context/ui";



function MyApp({ Component, pageProps }: AppProps) {
    return (
        <UIProvider>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>
        </UIProvider>
    )
}

export default MyApp;