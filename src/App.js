import React from 'react';
import ReactDOM from 'react-dom/client';
import {Header} from './components/Header'
import {Body} from "./components/Body"


let rootId = document.getElementById("root")

const Check = () => {
    
    <h1>Hello</h1>
}


let App = () => {
    return (
        <div>
            <Header/>
            <Body />
        </div>
        
    )
}


let root = ReactDOM.createRoot(rootId);
root.render(<App />);
