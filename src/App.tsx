import React from 'react';
import Browser from "./components/Browser/Browser";
import "./_reset.css";
import Content from "./components/Content/Content";
import 'animate.css';

function App() {
    return (
        <div className="App">
            <Browser>
                <Content/>
            </Browser>
        </div>
    );
}

export default App;
