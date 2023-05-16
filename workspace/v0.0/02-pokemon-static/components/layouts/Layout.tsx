import { FC, ReactNode } from "react";
import Head from "next/head";

import { NavBar } from "../ui";



type Props = {
    children: ReactNode,
    title?: string
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout: FC<Props> = ({ children, title }) => {


    return (
        <>
            <Head>
                <title>{title || 'Pokemon App'}</title>
                <meta name="author" content="Leandro Tomassini" />
                <meta name="description" content={`Información del pokémon ${title}`} />
                <meta name="keywords" content={`${title}, pokemon, pokedex`} />

                <meta property="og:title" content={`Información sobre ${title}`} />
                <meta property="og:description" content={`Esta es la página sobre ${title}`} />
                <meta property="og:image" content={`${origin}/img/banner.png`} />
            </Head>

            <NavBar></NavBar>

            <main style={{
                padding: '0px 20px'
            }}>
                {children}
            </main>
        </>
    );
};