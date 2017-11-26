import React from "react";
import { Form } from "../organisms/Form";

class HomePage extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <Form />
            </div>
        );
    }
}

export {HomePage};