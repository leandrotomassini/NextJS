import { FC } from 'react';
import { Grid } from '@nextui-org/react';

import { FavoriteCardPokemon } from '../pokemon';

interface Props {
    pokemons: Number[];
}

export const FavoritePokemons: FC<Props> = ({ pokemons }) => {

    const generateRandomId = () => Math.floor(Math.random() * 1000000);

    return (
        <Grid.Container gap={2} direction='row' justify='flex-start'>
            {
                pokemons.map(id => (
                        <FavoriteCardPokemon key={generateRandomId()} pokemonId={id} />
                ))
            }
        </Grid.Container>
    )
}