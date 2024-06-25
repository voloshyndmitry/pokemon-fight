import Flexbox from 'flexbox-react';
import {FormattedPokemon} from "../../../interfaces/common";
import "./PokemonCard.css"
import {useEventLight} from "react-event-light";
import {useEffect, useState} from "react";

interface PropsItf extends FormattedPokemon {
    reflected: boolean;
}

const PokemonCard = (props: PropsItf) => {
    const imgClassName = props.reflected ? "animate__bounceInLeft reflected" : "animate__bounceInRight";
    const [showMove, setShowMove] = useState(false);
    const [subscribe] = useEventLight();

    useEffect(() => {
        const subscription = subscribe("run-battle", () => {

            setShowMove(true);
        });

        return () => {
            subscription.unsubscribe();
        };
    }, [subscribe]);

    return (<Flexbox className={"chat"} alignItems={"center"} flexDirection={props.reflected ? "row" : "row-reverse"}>
        <img src={props.url} className={`${imgClassName} animate__animated`}/>
        <Flexbox className={"animate__jello animate__animated chat-shipped"} flexDirection={"row"}>
            <h2>{props.name}</h2>
            {showMove && (<span className={"animate__bounceIn animate__animated"} color={"green"}>{props.move}</span>)}
        </Flexbox>

    </Flexbox>)
};

export default PokemonCard;