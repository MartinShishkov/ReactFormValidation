import React from "react";
import { Label } from "../atoms/Label";
import { TextBox } from "../atoms/TextBox";
import { Message } from "../atoms/Message";

const TextBoxGroup = (props) => {
    
    const errors = props.validation.rules.filter((rule) => {
        const isValid = rule.condition(props.value);

        return isValid === false;
    });

    const color = errors.length > 0 ? "red" : null;

    return (
        <div>
            <Label text={props.label} style={{display: "block", color: color}}/>
            <TextBox name={props.name} type={props.type} value={props.value}
                onChange={props.onChange} placeholder={props.placeholder} 
                className={props.className} 
                style={{display: "block", borderColor: color}}/>
            {errors.length > 0 && (
                <div>
                    {errors.map((e, i) => {
                        return <Message text={e.errorMessage} color={"red"} key={i}/>
                    })}
                </div>
            )}
        </div>  
    );
}

export { TextBoxGroup };