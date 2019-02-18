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
const userModel = require("../models/user");
/**
 * fetch all users
 */
function fetchAll() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield userModel.fetchAll();
        }
        catch (error) {
            throw error;
        }
    });
}
exports.fetchAll = fetchAll;
;
/**
 * search user by params
 */
function search(params) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield userModel.search(params);
        }
        catch (error) {
            throw error;
        }
    });
}
exports.search = search;
/**
 * fetch user by id
 */
function fetchById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield userModel.fetchById(id);
        }
        catch (error) {
            throw error;
        }
    });
}
exports.fetchById = fetchById;
;
/**
 * save user
 */
function save(user) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const [insertId] = yield userModel.save(user);
            return Object.assign({ insertId }, user);
        }
        catch (error) {
            throw error;
        }
    });
}
exports.save = save;
;
/**
 * update user
 */
function update(id, user) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield userModel.update(id, user);
            return Object.assign({ id: id }, user);
        }
        catch (error) {
            throw error;
        }
    });
}
exports.update = update;
;
//# sourceMappingURL=user.js.map