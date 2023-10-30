import Head from 'next/head';
import { FC } from 'react';
import { NavBar } from '../ui';

type Props = {
    children?: React.ReactNode,
    title: string
};

export const Layout: FC<Props> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title || 'PokemonApp'}</title>
                <meta name="author" content="Leandro Tomassini" />
                <meta name="description" content={`Información del pokémon ${title}`} />
                <meta name="keywords" content={`${title}, pokemon, pokedex`} />
            </Head>

            <NavBar />


            <main style={{
                padding: '0px 20px'
            }}>
                {children}
            </main>
        </>
    );
}
