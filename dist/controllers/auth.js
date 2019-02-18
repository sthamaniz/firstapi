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
const config_1 = require("../config/config");
/**
 *
 * @param {AuthRequest} req
 * @param {Response} res
 * @param {NextFunction} next
 */
function generateToken(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { body: { id, username, email, phone } } = req;
            const userDetailForToken = { id, username, email, phone };
            const JWT_SECRET = config_1.default.jwtSecret;
            const tokenExpiresIn = '1d';
            const accessToken = jwt.sign(userDetailForToken, JWT_SECRET, { expiresIn: tokenExpiresIn });
            res.json(Object.assign({}, userDetailForToken, { accessToken }));
        }
        catch (error) {
            throw error;
        }
    });
}
exports.generateToken = generateToken;
//# sourceMappingURL=auth.js.map