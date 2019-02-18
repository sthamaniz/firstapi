"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const config_1 = require("./config/config");
app_1.default.listen(config_1.default.app.port, () => {
    console.log(`Express server listening on port : ${config_1.default.app.port}`);
});
//# sourceMappingURL=server.js.map