"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * custom error class
 */
class CustomError extends Error {
    constructor(message, details, code) {
        super(message);
        this.details = details;
        this.code = code;
        this.details = details;
        this.code = code;
        Object.setPrototypeOf(this, CustomError.prototype);
    }
}
exports.default = CustomError;
//# sourceMappingURL=CustomError.js.map