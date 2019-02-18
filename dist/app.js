"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./env");
const express = require("express");
const bodyParser = require("body-parser");
const routes_1 = require("./routes");
const errorHandler = require("./middlewares/errorHandler");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
/**
 * get routes
 */
app.use('/', routes_1.default);
/**
 * route not found error
 */
app.use(errorHandler.notFound);
/**
 * generic errors
 */
app.use(errorHandler.genericErrors);
exports.default = app;
//# sourceMappingURL=app.js.map