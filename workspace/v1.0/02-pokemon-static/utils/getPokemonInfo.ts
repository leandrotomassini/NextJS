import { Pokemon } from '../interfaces';
import pokeApi from '../api/pokeApi';

export const getPokemonInfo = async (nameOrid: string) => {

    try {

        const { data } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrid}`);

        return {
            id: data.id,
            name: data.name,
            sprites: data.sprites
        }
    } catch (error) {
        return null;
    }

}