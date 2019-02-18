"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../validators/auth");
const auth_2 = require("../controllers/auth");
const router = express_1.Router();
/**
 * search the user according to the username and password
 *
 POST /auth
 */
router.post('/', auth_1.validateLogin, auth_2.generateToken);
exports.default = router;
//# sourceMappingURL=auth.js.map