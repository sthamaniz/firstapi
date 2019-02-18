"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const userService = require("../services/user");
const DataNotFoundError_1 = require("../errors/DataNotFoundError");
/**
 * validate user login
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise}
 */
function validateLogin(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const [user] = yield userService.search(req.body);
            if (user) {
                req.user = user;
                next();
            }
            else {
                throw new DataNotFoundError_1.default('Username/Password incorrect');
            }
        }
        catch (error) {
            return next(error);
        }
    });
}
exports.validateLogin = validateLogin;
//# sourceMappingURL=auth.js.map