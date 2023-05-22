import { AppProps } from "next/app";
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from "@mui/material";

import { darkTheme, lightTheme } from "../themes";
import '../styles/globals.css';
import { UIProvider } from "../context/ui";
import { EntriesProvider } from "@/context/entries";



function MyApp({ Component, pageProps }: AppProps) {
    return (
        <EntriesProvider>
            <UIProvider>
                <ThemeProvider theme={darkTheme}>
                    <CssBaseline />
                    <Component {...pageProps} />
                </ThemeProvider>
            </UIProvider>
        </EntriesProvider>
    )
}

export default MyApp;