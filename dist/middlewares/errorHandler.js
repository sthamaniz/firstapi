"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CustomError_1 = require("../errors/CustomError");
const http_status_code_1 = require("http-status-code");
function genericErrors(err, req, res, next) {
    const defaultError = {
        code: 500,
        message: "Server Error"
    };
    if (err instanceof CustomError_1.default) {
        const errorPayload = {
            code: err.code,
            message: err.message,
            details: err.details
        };
        res.status(errorPayload.code).json(errorPayload);
    }
    res.status(defaultError.code).json(defaultError);
}
exports.genericErrors = genericErrors;
/**
 * Error response middleware for 404 not found.
 *
 * @param {Request} req
 * @param {Response} res
 */
function notFound(req, res) {
    res.json({
        error: {
            code: http_status_code_1.default.NOT_FOUND,
            message: http_status_code_1.default.getStatusText(http_status_code_1.default.NOT_FOUND)
        }
    });
}
exports.notFound = notFound;
//# sourceMappingURL=errorHandler.js.map