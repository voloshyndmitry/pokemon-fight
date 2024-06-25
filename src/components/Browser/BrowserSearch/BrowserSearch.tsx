import "./BrowserSearch.css";
import {useMemo} from "react";

const BrowserSearch = () => {
    const value = useMemo(() => window.location.href, [window.location.href]);
    
    return <input type="text" className={"search"} value={value} onChange={() => null}/>
}

export default BrowserSearch;