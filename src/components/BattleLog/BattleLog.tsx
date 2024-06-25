import Flexbox from 'flexbox-react';
import {useEventLight} from "react-event-light";
import {useMemo, useState} from "react";

const BattleLog = () => {
    const [clicked, setClicked] = useState<boolean>(false);
    const className = useMemo(() => clicked ? "animate__hinge animate__animated" : "animate__animated", [clicked])
    const [, publish] = useEventLight();

    const handleClick = () => {
        publish("run-battle", {message: "run"})
        setTimeout(() => setClicked(true), 2000)
    }
    return (
        <Flexbox flexDirection={"column"} height={"30%"} padding={"20px"}>
            <h4>Battle Log</h4>
            <Flexbox flexDirection={"row"}>
                <Flexbox></Flexbox>
                <button className={className} onClick={handleClick}>Start Battle!</button>
            </Flexbox>
        </Flexbox>
    )
};

export default BattleLog;