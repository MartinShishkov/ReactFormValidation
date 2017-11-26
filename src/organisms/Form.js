import React from "react";
import { TextBoxGroup } from "../molecules/TextBoxGroup";

class Form extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            canSubmit: true
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit} method="POST">
                <TextBoxGroup label={"First name"} name={"firstName"}  value={this.state.firstName} 
                    onChange={this.handleChange} validation={{ rules: [
                        {
                            condition: (firstName) => {
                                const isValid = firstName.length >= 6;
                                return isValid;
                            },
                            errorMessage: "First name must be at least 6 chars long!"
                        },
                        {
                            condition: (firstName) => {
                                const isValid = firstName.toLowerCase() !== this.state.lastName.toLowerCase();
                                return isValid;
                            },
                            errorMessage: "First name cannot be the same as last name!"
                        }
                    ]
                }}/>

                <TextBoxGroup label={"Last name"} name={"lastName"} value={this.state.lastName} 
                    onChange={this.handleChange} validation={{
                        rules: []
                    }}/>

                <TextBoxGroup label={"Email"} name={"email"} type={"email"}
                    value={this.state.email} onChange={this.handleChange} validation={{
                        rules: [{
                            condition: (email) => {
                                const r = new RegExp(/(martin)/);
                                const isValid =  r.test(email) === false;
                                return isValid;
                            },
                            errorMessage: "Dude, your email must not contain 'martin' in it!"
                        }]
                    }}/>

                <TextBoxGroup label={"Password"} name={"password"} type={"password"}
                    value={this.state.password} onChange={this.handleChange} validation={{
                        rules: []
                    }}/>

                <TextBoxGroup label={"Confirm password"} name={"confirmPassword"} type={"password"}
                    value={this.state.confirmPassword} onChange={this.handleChange} validation={{
                        rules: []
                    }}/>

                <input type="submit" value={"submit"} />
            </form>
        );
    }

    handleChange({target}){
        this.setState({
            [target.name]: target.value
        })
    }
    
    handleSubmit(e){
        console.log(this.state);

        if(this.state.firstName.length === 0){
            e.preventDefault();            
        }

    }
}

export { Form };