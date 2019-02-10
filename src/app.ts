import './env';

import * as express from "express";
import * as bodyParser from "body-parser";

import routes from './routes';

import * as routeNotFound from './middlewares/routenotfound';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/**
 * get routes
 */
app.use('/', routes);

/**
 * route not found error
 */
app.use(routeNotFound.notFound);

export default app;