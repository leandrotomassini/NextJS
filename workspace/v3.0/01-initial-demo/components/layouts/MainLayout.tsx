import * as React from 'react';
import Head from "next/head";

import styles from "./MainLayout.module.css";
import { Navbar } from "../Navbar";

type Props = {
    children?: React.ReactNode
}


export const MainLayout: React.FC<Props> = ({ children }) => {

    return (
        <>
            <Head>
                <title>Home - Innovance</title>
                <meta name="description" content="Home Innovance" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            <main className={`${styles.main}`}>
                {children}
            </main>
        </>
    )
}
