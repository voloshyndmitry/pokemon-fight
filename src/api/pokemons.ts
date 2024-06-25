import {get} from "./common";
import {PokemonItf, PokemonRespItf} from "../interfaces/common";

export const fetchPokemons = async (): Promise<PokemonItf[]> => {
    try {
        const res = await get<Promise<PokemonRespItf>>(
            "https://pokeapi.co/api/v2/pokemon/?limit=1000"
        );

        return res.results;
    } catch (error) {
        console.warn("fetchPokemons: ", error);
        // Here wee need to track the error using builded in project monitoring system.

        return [];
    }
};
