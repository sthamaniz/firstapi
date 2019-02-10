/**
 * authorization error with custom error message
 */
class AuthorizationError extends Error {
    constructor(message:string, public details?:string, public code?:number) {
        super(message);
        this.details = details;
        this.code = code;
        Object.setPrototypeOf(this, AuthorizationError.prototype);
    }
}

export default AuthorizationError;