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
const adminService = require("../services/admin");
/**
 * fetch all admins
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
function fetchAll(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const allAdmin = yield adminService.fetchAll();
            res.status(200).json(allAdmin);
        }
        catch (error) {
            next(error);
        }
    });
}
exports.fetchAll = fetchAll;
;
/**
* fetch all admins
*
* @param {Request} req
* @param {Response} res
* @param {NextFunction} next
*/
function fetchById(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const admin = yield adminService.fetchById(req.params.id);
        res.json(admin);
    });
}
exports.fetchById = fetchById;
;
/**
 * fetch all admins
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
function save(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const admin = yield adminService.save(req.body);
        res.json(admin);
    });
}
exports.save = save;
;
/**
 * fetch all admins
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
function update(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const admin = yield adminService.update(req.params.id, req.body);
        res.json(admin);
    });
}
exports.update = update;
;
//# sourceMappingURL=admin.js.map