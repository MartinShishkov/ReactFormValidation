import React from "react";
import { Label } from "../atoms/Label";
import { TextBox } from "../atoms/TextBox";
import { Message } from "../atoms/Message";

const TextBoxGroup = (props) => {
    
    const isValid = props.errors.length === 0;
    const color = isValid ? null : "red";

    return (
        <div>
            <Label text={props.label} style={{display: "block", color: color}}/>
            <TextBox name={props.name} type={props.type} value={props.value}
                onChange={props.onChange} placeholder={props.placeholder} 
                className={props.className} 
                style={{display: "block", borderColor: color}}/>
            {isValid === false && (
                <div>
                    {props.errors.map((e, i) => {
                        return <Message text={e} color={"red"} key={i}/>
                    })}
                </div>
            )}
        </div>  
    );
}

export { TextBoxGroup };