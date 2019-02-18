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
const jwt = require("jsonwebtoken");
const TokenError_1 = require("../errors/TokenError");
const config_1 = require("../config/config");
/**
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @return {Promise}
 */
function checkAccessToken(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { headers: { accessToken } } = req;
        if (!accessToken) {
            next(new TokenError_1.default('Access Token Not Set'));
        }
        else {
            try {
                const decoded = jwt.verify(accessToken, config_1.default.jwtSecret);
                const user = decoded;
                req.user = user;
                next();
            }
            catch (error) {
                next(new TokenError_1.default('Access Token Not Set'));
            }
        }
    });
}
exports.checkAccessToken = checkAccessToken;
//# sourceMappingURL=accestoken.js.map