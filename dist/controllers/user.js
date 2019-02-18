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
/**
 *
 * fetch all users
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
function fetchAll(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const allUser = yield userService.fetchAll();
            res.json(allUser);
        }
        catch (error) {
            throw error;
        }
    });
}
exports.fetchAll = fetchAll;
;
/**
 *
 * fetch user by id
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
function fetchById(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield userService.fetchById(req.params.id);
            res.json(user);
        }
        catch (error) {
            throw error;
        }
    });
}
exports.fetchById = fetchById;
;
/**
 *
 * save user
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
function save(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield userService.save(req.body);
            res.json(user);
        }
        catch (error) {
            throw error;
        }
    });
}
exports.save = save;
;
/**
 *
 * update user
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
function update(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield userService.update(req.params.id, req.body);
            res.json(user);
        }
        catch (error) {
            throw error;
        }
    });
}
exports.update = update;
;
//# sourceMappingURL=user.js.map