import CustomError from './CustomError';

class DataNotFoundError extends CustomError {
    constructor(message:string, details?:string, code?:number) {
        super(message);
        this.details = details;
        this.message = message;
        this.code = 404;
        Object.setPrototypeOf(this, DataNotFoundError.prototype);
    }
}

export default DataNotFoundError;