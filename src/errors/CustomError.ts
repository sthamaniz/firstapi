/**
 * custom error class
 */
class CustomError extends Error {
    constructor(message:string, public details?:string | {}, public code?:number) {
        super(message);
        this.details = details;
        this.message = message;
        this.code = code;
        Object.setPrototypeOf(this, CustomError.prototype);
    }
}

export default CustomError;