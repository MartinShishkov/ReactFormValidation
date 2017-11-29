class ValidationResult {
    constructor(errorCodes){
        this.errorCodes = errorCodes;
        this.isValid = errorCodes.length === 0;
    }

    getErrors(){
        return this.errorCodes;
    }
}

export { ValidationResult };