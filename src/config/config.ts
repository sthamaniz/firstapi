import * as pkg from '../../package.json';

const PORT = process.env.PORT || 8080;

const config = {
    app: {
    name: (pkg as any).name,
    version: (pkg as any).version,
    description: (pkg as any).description,
    host: process.env.APP_HOST,
    baseUrl: process.env.API_BASE_URL,
    port: PORT
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
    }
};

export default config;