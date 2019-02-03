// import * as pkg from '../../package.json';

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
    }
};

export default config;