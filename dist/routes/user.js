"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController = require("../controllers/user");
const router = express_1.Router();
/**
 * fetch all users
 *
 * GET /users
 */
router.get('/', userController.fetchAll);
/**
 * fetch user by id
 *
 * GET /users/:id
 */
router.get('/:id', userController.fetchById);
/**
 * save user
 *
 * POST /users
 */
router.post('/', userController.save);
/**
 * update user
 *
 * PUT /users/:id
 */
router.put('/:id', userController.update);
exports.default = router;
//# sourceMappingURL=user.js.map