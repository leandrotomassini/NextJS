import { GetStaticProps, NextPage, GetStaticPaths } from 'next';

import { Layout } from '../../components/layouts';
import pokeApi from '../../api/pokeapi';
import { Pokemon } from '../../interfaces';

interface Props {
    pokemon: Pokemon
}



const PokemonPage: NextPage<Props> = ({ pokemon }) => {

    return (
        <Layout title='Algun pokémon'>
            <h1>{pokemon.name}</h1>
        </Layout>
    );
}



export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const pokemons151 = [...Array(151)].map((value, index) => `${index + 1}`);

    return {
        paths: pokemons151.map(id => ({
            params: { id }
        })),
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

    const { id } = params as { id: string };

    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);


    return {
        props: {
            pokemon: data
        }
    }
}


export default PokemonPage;
