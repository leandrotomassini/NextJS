import { PokemonGrid } from '@/app/pokemons/components';

export const metadata = {
    title: 'Favoritos',
    description: 'Tus pokemones favoritos.'
}




export default async function FavoritesPage() {



    return (
        <div className='flex flex-col'>

            <span className='text-5xl my-2'>
                Pokemons Favoritos
                <small className='text-blue-500'>Global State</small>
            </span>

            <PokemonGrid pokemons={[]} />
        </div>
    );
}
