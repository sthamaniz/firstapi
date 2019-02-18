"use strict";
// import * as pkg from '../../package.json';
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    app: {
        name: 'testapi',
        version: '1.0.0',
        description: 'test api',
        host: process.env.APP_HOST,
        baseUrl: process.env.API_BASE_URL,
        port: process.env.PORT
    },
    database: {
        client: process.env.DB_CLIENT,
        connection: {
            charset: 'utf8',
            user: process.env.DB_USER,
            database: process.env.DB_NAME,
            password: process.env.DB_PASSWORD,
            host: process.env.DB_HOST || '127.0.0.1'
        }
    },
    jwtSecret: process.env.JWT_SECRET
};
exports.default = config;
//# sourceMappingURL=config.js.map