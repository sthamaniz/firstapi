import CustomError from './CustomError';

class DataDuplicateError extends CustomError {
    constructor(message:string, details?:{}, code?:number) {
        super(message);
        this.details = details;
        this.message = message;
        this.code = 404;
        Object.setPrototypeOf(this, DataDuplicateError.prototype);
    }
}

export default DataDuplicateError;