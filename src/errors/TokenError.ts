import CustomError from './CustomError';

class TokenError extends CustomError {
    constructor(message:string, details?:string, code?:number) {
        super(message);
        this.details = details;
        this.message = message;
        this.code = 403;
        Object.setPrototypeOf(this, TokenError.prototype);
    }
}

export default TokenError;