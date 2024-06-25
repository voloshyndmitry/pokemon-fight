import React, {useCallback} from "react";
import Flexbox from 'flexbox-react';
import BrowserSearch from "./BrowserSearch/BrowserSearch";
import leftArrow from "../../assets/left-arrow.png"
import rightArrow from "../../assets/right-arrow.png"
import home from "../../assets/home.png"
import reload from "../../assets/reload.png"
import "./Browser.css";

interface PropsItf {
    children?: React.ReactNode
}

const Browser = (props: PropsItf) => {
    const handleBackClick = useCallback(() => {
        window.history.back();
    }, []);
    const handleForwardClick = useCallback(() => {
        window.history.forward();
    }, []);
    const handleReloadClick = useCallback(() => {
        window.location.reload();
    }, []);
    const handleHomeClick = useCallback(() => {
        alert("home (^_^)");
    }, []);

    return (
        <Flexbox flexDirection={"column"} className="browser">
            <Flexbox alignItems={"center"} flexDirection={"column"} element={"header"} className={"browser-header"}>
                <h4>Title</h4>
                <Flexbox width={"100%"} flexDirection={"row"} justifyContent={"space-around"}>
                    <Flexbox flex={'2 2'} flexDirection={"row"} justifyContent={"space-around"}
                             className="browser-header_controls">
                        <div className="left-arrow icon" onClick={handleBackClick}>
                            <img src={leftArrow} alt="left arrow"/>
                        </div>
                        <div className="right-arrow icon" onClick={handleForwardClick}>
                            <img src={rightArrow} alt="right arrow"/>
                        </div>
                        <div className="reload icon" onClick={handleReloadClick}>
                            <img src={reload} alt="reload"/>

                        </div>
                        <div className="home icon" onClick={handleHomeClick}>
                            <img src={home} alt="home"/>
                        </div>
                    </Flexbox>
                    <Flexbox flex={'6 2'}>
                        <BrowserSearch/>
                    </Flexbox>

                </Flexbox>

            </Flexbox>
            <Flexbox padding={"20px"} className={"browser-content"}>
                {props.children}
            </Flexbox>
        </Flexbox>
    )
}

export default Browser;