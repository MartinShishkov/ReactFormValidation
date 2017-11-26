import React from "react";
import ReactDOM from "react-dom";
import {HomePage} from "./pages/Home";

class App{
    constructor(settings){
        this.settings = settings;
    }

    start(){
        ReactDOM.render(<HomePage />, 
            document.getElementById(this.settings.containerId));
    }
}

window.appEntryPoint = (settings) => {
    const app = new App(settings);
    app.start();
};