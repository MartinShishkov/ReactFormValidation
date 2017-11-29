import { ValidationResult } from "./ValidationResult";

class ObjectBuilder{
    constructor(){
        this.firstName = "";
        this.lastName = "";
        this.emails = [];
        this.password = "";
        this.confirmPassword = "";
    }

    validate(){
        return new ValidationResult([
            this.validateFirstName()
        ]);
    }

    validateFirstName(){
        if(this.firstName.length === 0){
            return "ERROR_FIRSTNAME_MISSING";
        }
    }
}

export { ObjectBuilder };