import React from "react";
import { ObjectBuilder } from "../logic/ObjectBuilder";
import { ObjectBuilderViewModel } from "../logic/ObjectBuilderViewModel";
import { TextBoxGroup } from "../molecules/TextBoxGroup";

class Form extends React.Component{
    constructor(props){
        super(props);
        
        this.builder = new ObjectBuilder();

        this.vm = new ObjectBuilderViewModel(this.builder, {
            ERROR_FIRSTNAME_MISSING: "First name cannot be empty!"
        });

        this.state = this.vm.getState();

        this.handleChange = this.handleChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit} method="POST">
                <TextBoxGroup label={"First name"} name={"firstName"} value={this.state.firstName} 
                    onChange={this.handleChange} errors={this.state.firstNameErrors}/>

                <TextBoxGroup label={"Last name"} name={"lastName"} value={this.state.lastName} 
                    onChange={this.handleChange} errors={[]}/>

                {this.state.emails.map( (e, i) => {
                    return (
                        <div key={e.key}>
                            <TextBoxGroup label={"Email"} name={"email"} type={"email"}
                                value={e.value} onChange={this.handleChange} errors={[]}/>
                            <button onClick={() => {}}>X</button>
                        </div>
                    );
                })}

                <button onClick={() => {
                    this.vm.addEmailSlot();
                    this.setState(this.vm.getState());
                }}>{"+"}</button>

                <TextBoxGroup label={"Password"} name={"password"} type={"password"}
                    value={""} onChange={this.handleChange} errors={[]}/>

                <TextBoxGroup label={"Confirm password"} name={"confirmPassword"} type={"password"}
                    value={""} onChange={this.handleChange} errors={[]}/>

                <input type="submit" value={"submit"} />
            </form>
        );
    }

    handleChange({target}){
        this.vm.set(target.name, target.value);

        this.setState(this.vm.getState());
    }

    handleEmailChange(value, index){
        this.vm.updateEmail(value, index);
        this.setState(this.vm.getState());
    }

    handleSubmit(e){
        console.log(this.state);
        const validationResult = this.vm.validate();
        this.setState(this.vm.getState());

        if(validationResult.isValid === false){
            e.preventDefault();            
        }
    }
}

export { Form };