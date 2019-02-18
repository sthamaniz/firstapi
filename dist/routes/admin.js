"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const adminController = require("../controllers/admin");
const router = express_1.Router();
/**
 * fetch all admins
 *
 * GET /admins
 */
router.get('/', adminController.fetchAll);
/**
 * fetch admin by id
 *
 * GET /admins/:id
 */
router.get('/', adminController.fetchById);
/**
 * save admin
 *
 * POST /admins
 */
router.post('/', adminController.save);
/**
 * update admin
 *
 * PUT /admins
 */
router.put('/', adminController.update);
exports.default = router;
//# sourceMappingURL=admin.js.map