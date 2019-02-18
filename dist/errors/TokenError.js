"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CustomError_1 = require("./CustomError");
class TokenError extends CustomError_1.default {
    constructor(message, details, code) {
        super(message);
        this.details = details;
        this.message = message;
        this.code = 403;
        Object.setPrototypeOf(this, TokenError.prototype);
    }
}
exports.default = TokenError;
//# sourceMappingURL=TokenError.js.map