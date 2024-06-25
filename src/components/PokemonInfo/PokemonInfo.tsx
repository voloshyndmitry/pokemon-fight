import Flexbox from 'flexbox-react';
import PokemonCard from "./PokemonCard/PokemonCard";
import "./PokemonInfo.css"
import {FormattedPokemon} from "../../interfaces/common";

interface PropsItf {
    pokemons: FormattedPokemon[]
}

const PokemonInfo = (props: PropsItf) => {
    return (
        <Flexbox className={"pokemon-info"} height={"70%"} flexDirection={"column"}>
            {
                props.pokemons.map((pokemon, key) => (
                    <PokemonCard
                        reflected={!Boolean(key % 2)}
                        key={`pokemon${key}`} {...pokemon}/>)
                )
            }
        </Flexbox>
    )
}

export default PokemonInfo;