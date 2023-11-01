import { GetStaticPaths, GetStaticProps } from 'next';

import { pokeApi } from '../../api';
import { Pokemon } from '../../interfaces';


const PokemonByNamePage = () => {
    return (
        <>
            <h1>PokemonByNamePage</h1>
        </>
    )
}


export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const pokemons151 = [...Array(151)].map((value, index) => `${index + 1}`);

    return {
        paths: pokemons151.map(name => ({
            params: { name }
        })),
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

    const { name } = params as { name: string };

    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${name}`);


    return {
        props: {
            pokemon: data
        }
    }
}



export default PokemonByNamePage;
