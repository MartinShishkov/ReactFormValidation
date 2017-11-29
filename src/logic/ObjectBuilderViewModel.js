import { ValidationResult } from "./ValidationResult";

class ObjectBuilderViewModel{
    constructor(builder, translation){
        this.builder = builder;
        this.emailCounter = 0;
        this.firstNameErrors = [];
        this.translation = translation;
    }

    getState(){
        return {
            firstName: this.builder.firstName,
            lastName: this.builder.lastName,
            emails: this.builder.emails.map((e) => {
                return {
                    key: this.emailCounter++,
                    value: e
                }
            }),
            firstNameErrors: this.firstNameErrors
        };
    }

    set(propertyName, value){
        this.builder[propertyName] = value;
    }

    addEmailSlot(){
        this.builder.emails.push("");
    }

    updateEmail(value, index){
        this.builder.emails[index] = value;
    }

    validate(){
        this.firstNameErrors = [];

        const validationResult = this.builder.validate();
        const errorMessages = validationResult.getErrors().map((errorCode) => {
            if(errorCode === "ERROR_FIRSTNAME_MISSING"){
                this.firstNameErrors.push(this.translation[errorCode]);
            }

            return this.translation[errorCode];
        });

        this.errorMessages = errorMessages;
        return validationResult;
    }
}

export { ObjectBuilderViewModel };