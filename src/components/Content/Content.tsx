import Flexbox from 'flexbox-react';
import PokemonInfo from "../PokemonInfo/PokemonInfo";
import BattleLog from "../BattleLog/BattleLog";
import usePokemon from "../../hooks/usePokemon";


const Content = () => {
    const [pokemons] = usePokemon();

    if (!pokemons?.length) {
        return <></>
    }
    
    return (
        <Flexbox flexDirection={"column"} width={"100%"} height={"100%"} justifyContent={"space-between"}>
            <PokemonInfo pokemons={pokemons}/>
            <BattleLog/>
        </Flexbox>
    )
}

export default Content;