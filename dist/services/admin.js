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
const adminModel = require("../models/admin");
/**
 * fetch all admins
 */
function fetchAll() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return adminModel.fetchAll();
        }
        catch (error) {
            throw error;
        }
    });
}
exports.fetchAll = fetchAll;
;
/**
* fetch admin by id
*/
function fetchById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return adminModel.fetchById(id);
        }
        catch (error) {
            throw error;
        }
    });
}
exports.fetchById = fetchById;
;
/**
*  save admin
*/
function save(admin) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const [insertId] = yield adminModel.save(admin);
            return Object.assign({ insertId }, admin);
        }
        catch (error) {
            throw error;
        }
    });
}
exports.save = save;
;
/**
* update admin
*/
function update(id, admin) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield adminModel.update(id, admin);
            return Object.assign({ id: id }, admin);
        }
        catch (error) {
            throw error;
        }
    });
}
exports.update = update;
;
//# sourceMappingURL=admin.js.map