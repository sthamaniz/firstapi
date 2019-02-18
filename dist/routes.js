"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const admin_1 = require("./routes/admin");
const user_1 = require("./routes/user");
const auth_1 = require("./routes/auth");
const accestoken_1 = require("./validators/accestoken");
const router = express_1.Router();
/**
 * get the info on start page
 */
router.get('/info', (req, res) => {
    res.json({
        name: 'first api',
        message: 'this is the first api'
    });
});
/**
 * auth router
 *
 * auth
 */
router.use('/auth', auth_1.default);
/**
 * admins router
 *
 * /admins
 */
router.use('/admins', accestoken_1.checkAccessToken, admin_1.default);
/**
 * user router
 *
 * /users
 */
router.use('/users', user_1.default);
exports.default = router;
//# sourceMappingURL=routes.js.map