import CustomError from './CustomError';

class AuthForbiddenError extends CustomError {
    constructor(message:string, details?:string, code?:number) {
        super(message);
        this.details = details;
        this.message = message;
        this.code = 502;
        Object.setPrototypeOf(this, AuthForbiddenError.prototype);
    }
}

export default AuthForbiddenError;