import { PokemonGrid } from '@/app/pokemons/components';
import { PokemonsResponse } from '@/app/pokemons/interfaces/pokemons-response';
import { SimplePokemon } from '@/app/pokemons/interfaces/simple-pokemon';

export const metadata = {
    title: 'Favoritos',
    description: 'Tus pokemones favoritos.'
}

const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
    const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        .then(res => res.json());

    const pokemons = data.results.map(pokemon => ({
        id: pokemon.url.split('/').at(-2)!,
        name: pokemon.name
    }));

    return pokemons;
}


export default async function PokemonsPage() {

    const pokemons = await getPokemons(151);


    return (
        <div className='flex flex-col'>

            <span className='text-5xl my-2'>
                Listado de pokémons <small className='text-blue-500'>estático</small>
            </span>

            <PokemonGrid pokemons={pokemons} />
        </div>
    );
}
