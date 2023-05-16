import { FC } from 'react';

import Head from 'next/head';
import { NavBar } from '../ui';

interface Props {
    children?: React.ReactNode;
    title?: string;
}


export const Layout: FC<Props> = ({ children, title }) => {
    return (
        <>

            <Head>
                <title>{title || 'PokemonApp'}</title>
                <meta name="author" content='Leandro Tomassini' />
                <meta name="description" content={`Información sobre el Pokémon ${title}`} />
                <meta name="keywords" content={`${title}, pokemon, pokedex`} />
            </Head>

            <NavBar />

            <main style={{
                padding: '0px 20px'
            }}>
                {children}
            </main>
        </>
    )
}