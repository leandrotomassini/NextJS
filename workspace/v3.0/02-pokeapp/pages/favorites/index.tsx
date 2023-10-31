import { useEffect, useState } from 'react';
import { NextPage } from 'next';


import { Layout } from '../../components/layouts';
import { NoFavorites, FavoritePokemons } from '../../components/ui';
import { localFavorites } from '../../utils';



const FavoritesPage: NextPage = () => {

    const [favoritePokemons, setFavoritePokemons] = useState<Number[]>([]);

    useEffect(() => {
        setFavoritePokemons(localFavorites.pokemons());
    }, []);

    return (
        <Layout title='Favoritos'>

            {
                favoritePokemons.length === 0
                    ? (<NoFavorites />)
                    : (
                        <FavoritePokemons pokemons={favoritePokemons}/>
                    )
            }


        </Layout>

    );
}


export default FavoritesPage;
