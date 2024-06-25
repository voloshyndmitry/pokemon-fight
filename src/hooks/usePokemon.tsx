import {useEffect, useState} from "react";
import {fetchPokemons} from "../api/pokemons";
import {get} from "../api/common";
import {FormattedPokemon, PokemonDetailsItf} from "../interfaces/common";

let requested = false;
const usePokemon = () => {
    const [pokemons, setPokemons] = useState<FormattedPokemon[]>()

    useEffect(() => {
        initRequest();
    }, []);

    const initRequest = async () => {
        if (requested) {
            return;
        }
        requested = true;
        const data = await fetchPokemons();
        if (!data.length) {
            return;
        }
        const randomNumber1 = Math.floor(Math.random() * data.length);
        const randomNumber2 = Math.floor(Math.random() * data.length);

        const firstPokemon = await get<Promise<PokemonDetailsItf>>(data[randomNumber1]?.url);
        const secondPokemon = await get<Promise<PokemonDetailsItf>>(data[randomNumber2]?.url);

        const firstFormattedPokemon = {
            name: data[randomNumber1].name,
            url: firstPokemon.sprites.front_default,
            move: firstPokemon.moves[Math.floor(Math.random() * firstPokemon.moves.length)].move.name
        } as FormattedPokemon
        const secondFormattedPokemon = {
            name: data[randomNumber2].name,
            url: secondPokemon.sprites.front_default,
            move: secondPokemon.moves[Math.floor(Math.random() * secondPokemon.moves.length)].move.name
        } as FormattedPokemon

        setPokemons([firstFormattedPokemon, secondFormattedPokemon])
    }

    return [pokemons];
}

export default usePokemon;