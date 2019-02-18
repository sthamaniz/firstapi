"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CustomError_1 = require("./CustomError");
class DataNotFoundError extends CustomError_1.default {
    constructor(message, details, code) {
        super(message);
        this.details = details;
        this.message = message;
        this.code = 404;
        Object.setPrototypeOf(this, DataNotFoundError.prototype);
    }
}
exports.default = DataNotFoundError;
//# sourceMappingURL=DataNotFoundError.js.map